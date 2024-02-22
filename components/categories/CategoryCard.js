import AddtoCartButton from '../cart/AddtoCartButton'
import { formatPrice } from '@/utils/formatPrice'
import Image from '@/next/Image'
import Link from '@/next/Link'

export default function CategoryCard({ product }) {

    return (
        <div className='text-center'>
            <Link className='flex flex-col items-center' path="product" urlKey={product.urlKey}>
                <Image className="h-56 w-44 font-bold" src={product.image} />
                <span className='my-5 font-light'>{product.name}</span>
                <span className='mb-5'>{formatPrice(product.price)}</span>
            </Link>
            <AddtoCartButton product={product} />
        </div >
    )
}