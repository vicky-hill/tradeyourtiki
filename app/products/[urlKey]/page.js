import api from '@/utils/api'
import Image from '@/next/Image'
import Container from '@/components/layout/Container'
import { formatPrice } from '@/utils/formatPrice'
import AddtoCartButton from '@/components/cart/AddtoCartButton'

export default async function page({ params }) {

    const { urlKey } = params;
    const product = await api.get(`products/key/${urlKey}`);

    return (
        <Container className='pt-16 flex'>
            <Image
                className="w-6/12 h-96"
                src={product.image}
            />
            <div className='w-5/12'>
                <h1 className='mb-3 text-3xl font-medium'>{product.name}</h1>
                <p className='text-xl'>{formatPrice(product.price)}</p>
                <p className='mt-10'>{product.short_description}</p>
                
                <AddtoCartButton 
                    block 
                    quantity={1}
                    product={product}
                    className="mt-20"
                />
            </div>

        </Container>
    )
}