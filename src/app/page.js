import { dabrush } from './layout'
import api from '@/utils/api'
import Image from 'next/image'
import tropics from '../../public/tropics.png'
import Container from '@/components/layout/Container'
import AddtoCartButton from '@/components/cart/AddtoCartButton'

const Home = async ({ }) => {

    const products = await api.get('products');


    return (
        <>
            <Container className='text-center'>
                <h1 className={`text-6xl ${dabrush.className}`}>Trade your Tiki</h1>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        products.map(product => (
                            <div key={product._id}>
                                <h2>{product.name}</h2>
                                <p>{product.shortDesc}</p>
                                <p>${product.price}</p>
                                <AddtoCartButton product={product} className="mt-4" />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )
}

export default Home;
