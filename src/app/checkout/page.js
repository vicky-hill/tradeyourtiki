'use client'

import Button from '@/components/elements/Button'
import { useQuery } from '@/hooks'

export default function page({ }) {
    const query = useQuery();

    return (
        <div>
            <h1 className='mb-7'>Checkout</h1>

            <div className='space-x-5'>
                <Button onClick={() => query.add('example', 'six')}>
                    Add Query param
                </Button>

                <Button onClick={() => query.remove('example')}>
                    Remove Query param
                </Button>
            </div>

        </div>
    )
}