'use client'

import CartItems from '@/components/cart/CartItems'
import CartSummary from '@/components/cart/CartSummary'
import Container from '@/components/layout/Container'
import CartContext from '@/context/CartContext'
import { useContext } from 'react'

export default function page({ }) {

    const { items, subTotal, shipping, total } = useContext(CartContext)

    return (
        <Container>
            <h1 className='text-2xl mb-7'>Shopping Cart</h1>

            <div className='flex space-x-7'>
                <CartItems items={items} />
                
                <CartSummary
                    subTotal={subTotal}
                    shipping={shipping}
                    total={total}
                />
            </div>
        </Container>
    )
}