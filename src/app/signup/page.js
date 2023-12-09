'use client'

import { useEffect, useState, useContext } from 'react'
import UserContext from '@/context/UserContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import { useRouter } from 'next/navigation'

const Signup = ({ }) => {
    const router = useRouter();

    const { currentUser, register } = useContext(UserContext);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        email: "pm@excersys.com",
        password: "123456",
        password2: "123456"
    })

    useEffect(() => {
        currentUser && router.push('/account');
    }, [currentUser]);

    useEffect(() => {
        error && (
            setTimeout(() => {
                setError(null);
            }, 3000)
        )
    }, [error])

    const onSubmit = async () => {
        try {
            if (values.password !== values.password2) return setError("Passwords don't match");

            setLoading(true);
            const { email, password } = values;
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            const payload = { firebaseID: user.uid, email }
            register(payload);

            localStorage.setItem('token', user.accessToken);

            setValues({ email: '', password: '' });
            setLoading(false);

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <div className='ml-36'>
            <button onClick={onSubmit}>Sign up</button>
        </div>

    )
}


export default Signup
