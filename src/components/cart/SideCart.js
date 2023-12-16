'use client'

import { useContext } from 'react'
import { X } from 'react-feather'
import Button from '@/components/elements/Button'
import Alert from '@/components/elements/Alert'
import SlidingPane from 'react-sliding-pane'
import "react-sliding-pane/dist/react-sliding-pane.css"
import CartItem from './CartItem'
import Link from 'next/link'
import emptyCart from '../../../public/emptyCart.png'
import Image from 'next/image'
import CartContext from '@/context/CartContext'

const SideCart = ({ open, close }) => {

    const { items, shipping, subTotal, total, tax } = useContext(CartContext);

    return (
        <SlidingPane
            isOpen={open}
            hideHeader
            onRequestClose={close}
            width="425px"
            className="sidecart"
        >
            <div className={`sidecart ${items && !items.length ? 'justify-content-start' : ''}`}>
                <div className="sidecart__header">
                    <p className='sidecart__header-title'>Shopping Cart</p>
                    <X className='sidecart__header-close' onClick={close} />
                </div>

                <div className="sidecart__content">
                    {
                        items && items.filter(item => item.product.status === 'deleted' || !item.product.quantity).length ? (
                            <Alert className='py-2 mt-4' variant="danger" style={{ border: 'none' }}>
                                <i className="fa-solid fa-circle-exclamation me-2" />
                                Some products are out of stock
                            </Alert>
                        ) : null
                    }

                    {
                        items && items.length ? items.map(({ product, cartItemID, quantity }) => (
                            <div key={cartItemID}>
                                <CartItem product={product} cartItemID={cartItemID} quantity={quantity} />
                                {
                                    product.status === 'deleted' || !product.quantity ? (
                                        <Alert className='pt-0' variant="danger" style={{ border: 'none', background: 'none', marginTop: '-8px'  }}>
                                            <i className="fa-solid fa-circle-exclamation me-2" />
                                            This product is out of stock
                                        </Alert>
                                    ) : null
                                }
                            </div>
                        )) : (
                            <div className="sidecart__content-empty">
                                <div className='image'>
                                    <Image alt="empty shopping cart" src={emptyCart} layout="fill" objectFit="contain" />
                                </div>
                                <p>You haven't added any items to your cart</p>

                                <Button onClick={close} size="sm" variant="outline-secondary">Continue Shopping</Button>

                            </div>
                        )
                    }

                </div>

                {
                    items && items.length ? (
                        <div className="sidecart__footer">
                            <div className="sidecart__footer-row">
                                <p>Subtotal</p> <p>${Number(subTotal).toFixed(2)}</p>
                            </div>
                            <div className="sidecart__footer-row">
                                <p>Shipping</p> <p>${Number(shipping).toFixed(2)}</p>
                            </div>
                            <div className="sidecart__footer-row">
                                <p>Tax</p> <p style={{ color: 'grey', fontSize: 13 }}>Tax will be calculated on checkout</p> 
                            </div>
                            <div className="sidecart__footer-total">
                                <p>Total</p> <p>${Number(total).toFixed(2)}</p>
                            </div>
                            <Link href="/cart">
                                <Button onClick={close} size="big" variant="primary" block className='block mt-3'>View Cart and Checkout</Button>
                            </Link>
                        </div>
                    ) : null
                }

            </div>
        </SlidingPane>
    )
}



export default SideCart
