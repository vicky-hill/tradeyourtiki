'use client';

import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/elements/Button'
import CartContext from '@/context/CartContext'

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
        <Button onClick={handleAddToCart} {...rest} >
            <FontAwesomeIcon className="mr-3" icon={faCartShopping} color="#fff" />
            Add To Cart
        </Button>
    )
}

export default AddtoCartButton;
