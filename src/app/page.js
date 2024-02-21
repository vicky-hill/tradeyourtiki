import { dabrush } from './layout'
import api from '@/utils/api'
import Container from '@/components/layout/Container'
import Modal from '@/components/elements/Modal'
import CategoryCard from '@/components/categories/CategoryCard'


const Home = async ({ }) => {

    const { data: products } = await api.get('products');

    return (
        <>
            <Container className='text-center'>
                <h1 className={`text-6xl ${dabrush.className}`}>Trade your Tiki</h1>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20">
                    {
                        products.map(product => (
                            <CategoryCard product={product} />
                        ))
                    }
                </div>
            </Container>

            <Modal />
        </>
    )
}

export default Home;
