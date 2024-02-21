'use client'

import { formatPrice } from '@/utils/formatPrice'
import Link from '@/next/Link'
import Button from '@/components/elements/Button'

export default function CartSummary({ subTotal, shipping, total }) {

    return (
        <div className='cart-summary w-2/6'>
            <p className="cart-summary__heading mb-5">Order Summary</p>
            <div className="cart-summary__item">
                <p>Subtotal</p><strong>{formatPrice(subTotal)}</strong>
            </div>
            <div className="cart-summary__item">
                <p>Shipping</p><strong>{formatPrice(shipping)}</strong>
            </div>
            <div className={`cart-summary__total`}>
                <p>Total</p> <p>{formatPrice(total)}</p>
            </div>
            <Link href='/checkout'>
                <Button size='big' block>
                    Checkout
                </Button>
            </Link>
        </div>
    )
}