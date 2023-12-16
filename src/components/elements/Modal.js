'use client'

import { useEffect } from 'react'

/**
 * Modal
 * @param {boolean} open
 * @param {function} props.close
 * @param {string} props.className
 * @param {boolean} props.shouldCloseOnOutsideClick
 */
const Modal = ({ open, close, className = "", shouldCloseOnOutsideClick = true, children }) => {
    useEffect(() => {
        const body = document.querySelector('body').classList
        open ? body.add('no-scroll') : body.remove('no-scroll')
    }, [open])

    const closeOnOutsideClick = (e) => {
        if (shouldCloseOnOutsideClick && e.target.classList[0] === 'custom-modal') {
            close()
        }
    }

    return (
        <div className={`custom-modal ${open ? 'open' : ''}`} onClick={(e) => closeOnOutsideClick(e)}>
            <div className={"custom-modal__content " + className}>
                {children}
            </div>
        </div>
    )
}

export default Modal;