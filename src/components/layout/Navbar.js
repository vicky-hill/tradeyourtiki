import HeaderCartIcon from '../cart/HeaderCartIcon'
import Link from '@/next/Link'
import api from '@/utils/api'

export default async function Navbar({ font }) {
    const { data: categories } = await api.get('categories');

    return (
        <div className='navbar h-12 w-full flex items-center justify-center'>
            <div className={`space-x-6 ${font.className}`} style={{ letterSpacing: 1, textTransform: 'uppercase' }}>
                {
                    categories.map(category => (
                        <Link href={`/categories/${category.name.split(" ").join("-").toLowerCase()}`} key={category._id}>{category.name}</Link>
                    ))
                }
            </div>
            <HeaderCartIcon />
        </div>
    )
}