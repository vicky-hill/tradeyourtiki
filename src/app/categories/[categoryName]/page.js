import api from '@/utils/api'
import { dabrush } from '@/app/layout'
import Container from '@/components/layout/Container'
import CategoryCard from '@/components/categories/CategoryCard'

export default async function page({ params }) {
  const { data: products } = await api.get(`products/category/${params.categoryName}`)
  const categoryName = params.categoryName.split('-').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');

  return (
    <div>
      <h1 className={`${dabrush.className} mt-10 text-6xl text-center`}>{categoryName}</h1>
      <Container>
        <div className={`mt-10 grid grid-cols-4 gap-y-20 dosis`}>
          {
            products.map(product => (
              <CategoryCard product={product} />
            ))
          }
        </div>
      </Container>

    </div>
  )
}