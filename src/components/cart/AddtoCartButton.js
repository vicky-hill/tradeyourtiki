'use client'

import { useContext } from 'react'
import Button from '@/components/elements/Button'
import CartContext from '@/context/CartContext'


/**
 * Add to Cart button
 * @prop {object} product
 * @prop {number} quantity
 */
const AddtoCartButton = ({ product, quantity = 1, ...rest }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const payload = {
            productID: product._id,
            quantity
        }

        addToCart(payload, product);
    }

    return (
        <Button onClick={handleAddToCart} {...rest} outline >
            Add To Cart
        </Button>
    )
}

export default AddtoCartButton;
