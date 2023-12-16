import classNames from 'classnames'

/**
 * @typedef {'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'} VariantType
 */

/**
 * Alert
 * @param {object} props
 * @param {VariantType} props.variant
 * @param {String} props.message
 * @param {Function} props.closeAlert
 * @param {String} props.className
 */
const Alert = ({ variant = 'primary', message, closeAlert, className, ...props }) => {

    const classes = classNames('alert', {
        [className]: true,
        [`alert-${variant}`]: variant
    });

    return (
        message ? (
            <div className={classes} {...props}>
                {message}
                <button className='alert__close' onClick={closeAlert}>
                    <span>&times;</span>
                </button>
            </div>
        ) : null
    )
}

export default Alert;
