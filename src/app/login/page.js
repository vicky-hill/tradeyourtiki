'use client';

import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import { useRouter } from 'next/navigation'

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




    return (
        <div>
            <button className="m-36">Login</button>
        </div>
    )
}