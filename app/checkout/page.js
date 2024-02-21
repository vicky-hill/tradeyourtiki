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

                <Button onClick={() => query.remove('six')}>
                    Remove Query param
                </Button>

                <Button onClick={() => query.replace('example', 'seven')}>
                    Replace Query param
                </Button>

                <Button onClick={() => console.log(query.get('example', 'seven'))}>
                    Get
                </Button> 

                <Button onClick={() => console.log(query.is('example', 'seven'))}>
                    Is
                </Button> 

                <Button onClick={() => console.log(query.includes('example', 'seven'))}>
                    Includes
                </Button> 
            </div>

        </div>
    )
}