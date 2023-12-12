'use client';

import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
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
            {/* <FontAwesomeIcon className="mr-3" icon={faCartShopping} color="#4D7C73" /> */}
            Add To Cart
        </Button>
    )
}

export default AddtoCartButton;
