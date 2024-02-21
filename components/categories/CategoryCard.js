import AddtoCartButton from '../cart/AddtoCartButton'
import { formatPrice } from '@/utils/formatPrice'
import Image from '@/next/Image'

export default function CategoryCard({ product }) {

    return (
        <div className='flex flex-col items-center'>
            <Image className="h-56 w-44 font-bold" src={product.image} />
            <span className='my-5 font-light'>{product.name}</span>
            <span className='mb-5'>{formatPrice(product.price)}</span>
            <AddtoCartButton product={product} />
        </div>
    )
}