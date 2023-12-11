'use client';

import { createContext, useState, useContext, useEffect } from "react"
import UserContext from "@/context/UserContext"
import api from "@/utils/api"
// import AddToCartModal from "./AddToCartModal"

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(null);

    const [subTotal, setSubTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState(null);

    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        loadCart();
    }, [currentUser])

    const getSubTotal = (items) => {
        const itemTotal = items.reduce((acc, cur) => {
            return acc + Number(cur.product.price) * cur.quantity
        }, 0);

        return itemTotal;
    }

    const calculatePrices = (items) => {
        const subTotal = getSubTotal(items);

        const total = subTotal;

        return {
            subTotal: subTotal.toFixed(2),
            total: total.toFixed(2)
        };
    }

    const updateCart = (items) => {
        const { subTotal, total } = calculatePrices(items);

        setItems(items);
        setSubTotal(subTotal);
        setTotal(total);
    }

    const loadCart = async () => {
        try {
            const localCartID = localStorage.getItem('cartID');

            if (currentUser && localCartID) {
                convertGuestCart(localCartID);

            } else if (currentUser) {
                getUserCart();

            } else {
                getGuestCart(localCartID);
            }
        } catch (err) {
            console.log(err);
            setError(err)
        }
    }

    /* ===================================
       Logged in user cart
    =================================== */

    /** @param payload - { productID, quantity } */
    /** @param product - { _id, name, description, ... } */
    /** @param cartID */
    const addToCart = async (payload, product, cartID) => {
        try {
            const cart = await api.post(`cart/${cartID}/add`, payload);
            updateCart(cart.items);
            setModal(true);
            setProduct(product);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    /** @param payload - { productID: _id, quantity } */
    const updateQuantity = async (payload, cartID) => {
        try {
            const cart = await api.put(`cart/${cartID}/update`, payload);
            updateCart(cart.items);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    /** @param { string } cartItemID  */
    const removeItem = async (cartItemID) => {
        try {
            const cart = await api.delete(`cart/${cartItemID}/remove`);
            updateCart(cart.items);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    const convertGuestCart = async (cartID) => {
        try {
            const cart = await api.put(`cart/${cartID}/convert`);
            localStorage.removeItem('cartID');
            updateCart(cart.items);
        } catch (err) {
            console.log(err);
        }
    }

    const getUserCart = async () => {
        try {
            const cart = await api.get(`cart/null/retrieve`);
            cart ? updateCart(cart.items) : setItems([]);
        } catch (err) {
            console.log(err);
        }
    }

    const getGuestCart = async (localCartID) => {
        try {
            const cart = await api.get(`cart/${localCartID}/retrieve`);
            if (!localCartID) localStorage.setItem('cartID', cart._id);

            updateCart(cart.items);
        } catch (err) {
            console.log(err);
        }
    }

    const clearCart = () => {
        localStorage.removeItem('cart');
        setItems([]);
        setSubTotal(0);
        setShipping(0);
        setTotal(0);
    }



    const value = {
        items,
        subTotal,
        shipping,
        total,
        error,
        clearCart,
        addToCart,
        updateQuantity,
        removeItem,
        loadCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
            {/* <AddToCartModal modal={modal} setModal={setModal} product={product} /> */}
        </CartContext.Provider>
    )
}

export default CartContext;