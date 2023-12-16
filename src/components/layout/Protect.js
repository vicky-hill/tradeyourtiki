'use client'

import React, { useEffect, useContext } from 'react'
import UserContext from '@/context/UserContext'
import { useRouter } from 'next/navigation'

const Protect = ({ children }) => {
    const router = useRouter();

    const { currentUser, loading } = useContext(UserContext);

    useEffect(() => {
        if (!loading && !currentUser) {
            router.push('/login')
        }
    }, [currentUser, loading]);

    return (
        <div>
            {
                !currentUser ? <p className='m-36'>loading</p> : children
            }
        </div>
    )
}

export default Protect;