'use client'

import { useState } from 'react'
import { Plus, Minus, Trash2 } from 'react-feather'


const InputCounter = ({ quantity = 1, iconSize = 20, product, deleteOnZero, updateQuantity, setQuantity }) => {
    const [value, setValue] = useState(quantity);

    const handleStateChange = (calc) => {
        setValue(calc);
        updateQuantity ? updateQuantity({ productID: product._id, quantity: calc }) : setQuantity(calc);
    }

    const onQuantityMinus = () => {
        if (quantity > 1) {
            handleStateChange(quantity - 1);
        }
    }

    const onQuantityChange = (quantity) => {
        setValue(quantity);

        if (quantity !== '' && quantity > 0) {
            handleStateChange(quantity);
        }
    }

    const onQuantityAdd = () => {
        handleStateChange(quantity + 1);
    }

    return (
        <div className='input-counter'>
            <span className='minus-btn'>
                {
                    deleteOnZero && quantity === 1 ?
                        <Trash2 onClick={() => deleteOnZero(product._id)} size={15} /> :
                        <Minus size={iconSize} onClick={onQuantityMinus} />
                }
            </span>
            <input
                value={value}
                name="qty"
                onChange={e => onQuantityChange(e.target.value)}
            />
            <span className='plus-btn'>
                <Plus size={iconSize} onClick={onQuantityAdd} />
            </span>
        </div>
    )
}

export default InputCounter;
