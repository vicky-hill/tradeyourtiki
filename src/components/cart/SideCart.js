'use client'

import React, { useContext } from 'react'
import CartContext from '@/context/CartContext'
import { X } from 'react-feather'
import SlidingPane from 'react-sliding-pane'
import "react-sliding-pane/dist/react-sliding-pane.css"
import Button from '@/components/elements/Button'
import CartItem from './CartItem'

const SideCart = ({ open, close }) => {

    const { items, subTotal, shipping, total } = useContext(CartContext);

    return (
        <SlidingPane
            isOpen={open}
            hideHeader
            onRequestClose={close}
            width="425px"
            className="sidecart"
        >
            <div className="sidecart">
                <div className="sidecart__header">
                    <p className='sidecart__header-title'>Shopping Cart</p>
                    <X className='sidecart__header-close' onClick={close} />
                </div>

                <div className="sidecart__content">
                    {
                        items && items.length ? items.map(({ product, quantity }) => (
                            <CartItem key={product._id} product={product} quantity={quantity} />
                        )) : <p>No items in cart</p>
                    }
                </div>

                <div className="sidecart__footer">
                    <div className="sidecart__footer-row">
                        <p>Subtotal</p> <p>${Number(subTotal).toFixed(2)}</p>
                    </div>
                    <div className="sidecart__footer-row">
                        <p>Shipping</p> <p>${Number(shipping).toFixed(2)}</p>
                    </div>
                    <div className="sidecart__footer-total">
                        <p>Total</p> <p>${Number(total).toFixed(2)}</p>
                    </div>
                    <Button block size="big" variant="secondary" className='mt-3'>Checkout</Button>
                </div>
            </div>

        </SlidingPane>
    )
}

export default SideCart;
