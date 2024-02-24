'use client'

import { useState, useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js/pure"
import { Elements } from "@stripe/react-stripe-js"
import api from '@/utils/clientApi'
import CheckoutForm from '@/components/checkout/CheckoutForm'

const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);

export default function page({ }) {
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        createPaymentIntent();
    }, []);

    const createPaymentIntent = async () => {
        const body = { items: [{ id: '65c7856d6ec89ef87c9a02c2', metadata: { quantity: 1 } }] }
        body.metadata = {
            cartID: '65d8db0d41d198fd673243e7',
            email: 'pm@excersys.com'
        }

        const { clientSecret } = await api.post('orders/checkout', body);

        setClientSecret(clientSecret);
    }

    return (
        <div>
            <h1 className='mb-7'>Checkout</h1>

            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}

        </div >
    )
}