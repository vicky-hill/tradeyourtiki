'use client'

import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import { useRouter } from 'next/navigation'
import Container from '@/components/layout/Container'
import Form, { TextInput } from '@/components/form/Form'
import Button from '@/components/elements/Button'
import Link from '@/next/Link'

import UserContext from '@/context/UserContext'
import { useContext } from 'react'

export default function page({ }) {
    const router = useRouter();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: "123456"
    })

    const { currentUser, checkUserSession } = useContext(UserContext);

    const onSubmit = () => {

    }


    return (

        <Container content="extra-narrow fit-screen" center>
            <Form values={values} setValues={setValues} onSubmit={onSubmit}>
                <h1 className='form__title'>Login</h1>
                <p className='form__text'>Please enter your email and password:</p>

                <TextInput name="email" />
                <TextInput name="password" type="password" />

                <Button size="big" loading={loading} type="submit" round block className="mt-2">Login</Button>

                <p className='form__err'>{error && error}</p>
                <p className='form__text mt-5'>Don't have an account? <Link href="/signup">Sign up</Link></p>
            </Form>
        </Container>

    )
}