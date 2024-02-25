'use client'

import { useState, useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js/pure"
import { Elements } from "@stripe/react-stripe-js"
import api from '@/utils/api'
import CheckoutForm from '@/components/checkout/CheckoutForm'
import AddressForm from '@/components/checkout/AddressForm'
import Container from '@/components/layout/Container'
import CartSummary from '@/components/cart/CartSummary'

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

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#0d705a',
            colorBackground: '#ffffff'
        },
        rules: {
            '.Tab': {
                borderRadius: '5px',
                marginBottom: '15px'
            },
            '.Input': {
                borderRadius: '50px',
                padding: '12px',
                paddingLeft: '17px'
            },
            '.Label': {
                marginTop: '15px',
                marginBottom: '5px',
                marginLeft: '7px',
                fontWeight: '500'
            }
        }
    };

    const options = {
        clientSecret,
        appearance
    }


    return (
        <Container>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={options}>
                    <h1 className='text-5xl mb-8 font-regular'>Checkout</h1>

                    <div className='flex items-start space-x-7'>
                        <div className='w-4/6 pr-5'>
                            <AddressForm />
                            <CheckoutForm />
                        </div>

                        <CartSummary
                            subTotal={10}
                            shipping={10}
                            total={10}
                        />
                    </div>

                </Elements>
            )}

        </Container >
    )
}