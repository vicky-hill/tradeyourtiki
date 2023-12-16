import NextLink from 'next/link'

const paths = {
    home() {
        return '/'
    },
    cart() {
        return `/cart`
    },
    product(urlKey) {
        return `/products/${urlKey}`
    },
    createProduct(urlKey,) {
        return `/products/${urlKey}/create`;
    }
}

/**
 * @typedef {'home' | 'cart' | 'product' | 'createProduct'} PathType
 */

/**
 * Link
 * @param {object} props
 * @param {PathType} props.path
 * @param {String} props.urlKey
 * @param {string} props.href
 */
export default function Link({ path, name, urlKey, href, children, ...rest }) {

    const getHref = () => {
        if (href) return href;
        if (path) return paths[path](urlKey);
    }

    return (
        <NextLink href={getHref()} {...rest}>
            {children}
        </NextLink>
    )
}

