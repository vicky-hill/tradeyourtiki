import React from 'react'
import classNames from 'classnames'

/**
 * Button Component
 * @prop {string} variant - primary, secondary
 * @prop {string} size - regular, small, big
 * @prop {bool} outline
 * @prop {bool} round
 * @prop {bool} loading
 * @prop {bool} block
 */
const Button = ({ children, variant = 'primary', size = 'regular', outline, round, loading, block, gradient, className, ...props }) => {

    const classes = classNames('btn', {
        [className]: true,
        [`btn-${variant}`]: true,
        [`btn-${variant}-outline`]: true && outline,
        [`btn--${size}`]: true && size !== 'regular',
        [`btn--gradient-${gradient}`]: gradient,
        'btn--loading': loading,
        'btn--round': round,
        'btn--block': block
    });

    return (
        <button className={classes} {...props} >
            <span className="btn-text">
                {children}
            </span>
        </button>
    )
}

export default Button;
