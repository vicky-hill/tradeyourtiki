'use client'

import { useState, useEffect, useContext } from 'react'
import CartContext from '@/context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import SideCart from './SideCart'

const HeaderCartIcon = ({ }) => {
    const [sidecart, setSidecart] = useState(false);
    const [itemCount, setItemCount] = useState(0);

    const { items } = useContext(CartContext);

    useEffect(() => {
        if (items) {
            const count = items.reduce((acc, current) => {
                return acc + current.quantity
            }, 0);

            setItemCount(count);
        }

    }, [items])

    return (
        <>
            <div className="cart-icon" onClick={() => setSidecart(true)}>
                <FontAwesomeIcon icon={faCartShopping} color="#A0B383" />
                { items && <span className='cart-icon__badge'>{ itemCount }</span> } 
            </div>
            <SideCart open={sidecart} close={() => setSidecart(false)} />
        </>
    )
}

export default HeaderCartIcon;
