import React, { useContext } from 'react'
import CartContext from '@/context/CartContext'
import InputCounter from './InputCounter'
import Image from '@/next/Image'

const CartItem = ({ product, cartItemID, quantity }) => {

    const { updateQuantity, removeItem } = useContext(CartContext);

    const getItemTotalPrice = (price, quantity) => {
        const total = Number(price) * Number(quantity);
        return Number(total).toFixed(2);
    }

    return (
        <div key={product.productID} className="sidecart__content-item">
            <Image
                src={product.image}
                className="sidecart__content-image"
            />
            <div className="sidecart__content-info">
                <p className="sidecart__content-name">{product.name}</p>
                <p className="sidecart__content-quantity">Quantity: {quantity}</p>
                <p className="sidecart__content-price">${getItemTotalPrice(product.price, quantity)}</p>
            </div>
            <div className="sidecart__content-edit">
                <InputCounter
                    deleteOnZero={removeItem}
                    updateQuantity={updateQuantity}
                    quantity={quantity}
                    cartItemID={cartItemID}
                    iconSize={15}
                    product={product}
                />
            </div>
        </div>
    )
}


export default CartItem;
