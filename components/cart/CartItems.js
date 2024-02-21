'use client'

import CartItem from '@/components/cart/CartItem'

export default function CartItems({ items }) {

    return (
        <div className='w-4/6'>
            {
                items && items.length ? items.map(({ product, _id, quantity }) => (
                    <CartItem key={_id} product={product} cartItemID={_id} quantity={quantity} />
                )) : 'No items in cart'
            }
        </div>
    )
}