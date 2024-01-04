'use client'

import { createContext, useState, useContext, useEffect } from 'react'
import UserContext from '@/context/UserContext'
import api from '@/utils/clientApi'
import AddToCartModal from '@/components/cart/AddToCartModal'
const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartID, setCartID] = useState(null);
    const [items, setItems] = useState(null);

    const [subTotal, setSubTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState(null);

    const { loading, currentUser } = useContext(UserContext);

    // const state = {
    //     cartID,
    //     items,
    //     subTotal,
    //     shipping,
    //     total,
    //     error
    // }

    // console.log(state)

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

    const updateCart = ({ items, _id }) => {
        const { subTotal, total } = calculatePrices(items);

        setCartID(_id);
        setItems(items);
        setSubTotal(subTotal);
        setTotal(total);
    }

    const loadCart = async () => {
        try {
            const localCartID = localStorage.getItem('cartID');

            if (!loading) {
                if (currentUser && localCartID) convertGuestCart(localCartID);
                if (currentUser) getUserCart();
                else getGuestCart(localCartID);
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
    const addToCart = async (payload, product) => {
        try {
            const cart = await api.put(`cart/${cartID}/add`, payload);
            updateCart(cart);
            setProduct(product);
            setModal(true);
    
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    /** @param payload - { cartItemID: _id, quantity } */
    const updateQuantity = async ({ cartItemID, quantity}) => {
        try {
            const cart = await api.put(`cart/${cartItemID}/update`, { quantity });
            updateCart(cart);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    /** @param { string } cartItemID  */
    const removeItem = async (cartItemID) => {
        try {
            const cart = await api.put(`cart/${cartItemID}/remove`);
            updateCart(cart);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    const convertGuestCart = async (cartID) => {
        try {
            const cart = await api.put(`cart/${cartID}/convert`);
            localStorage.removeItem('cartID');
            updateCart(cart);
        } catch (err) {
            console.log(err);
        }
    }

    const getUserCart = async () => {
        try {
            const cart = await api.get(`cart/null/retrieve`);
            cart ? updateCart(cart) : setItems([]);
        } catch (err) {
            console.log(err);
        }
    }

    const getGuestCart = async (localCartID) => {
        try {
            const cart = await api.get(`cart/${localCartID}/retrieve`);
            if (!localCartID) localStorage.setItem('cartID', cart._id);

            updateCart(cart);
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
            <AddToCartModal 
                updateQuantity={updateQuantity} 
                modal={modal} 
                close={() => setModal(false)}
                product={product} 
            />
        </CartContext.Provider>
    )
}

export default CartContext;