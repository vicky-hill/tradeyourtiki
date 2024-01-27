'use server'

import { cookies } from 'next/headers'
import api from '@/utils/api'
import { auth } from '@/utils/firebase'


/**
 * Set token cookie
 * @param {string} token
 */
export async function setTokenCookie(token) {
    cookies().set('token', token);
}

/**
 * Remove token cookie
 */
export async function removeTokenCookie() {
    cookies().delete('token')
}

export async function getUser() {
    const user = await api.get('user');
    return user;
}

/** Check user session and get current user */
export const checkUserSession = async () => {
    try {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log('fb user', user)
            unsubscribe();
        });
    } catch (err) {
        console.log(err);
    }
}