'use server'
import { cookies } from 'next/headers'
import api from '@/utils/api';


/**
 * Set token cookie
 * @param {string} token
 */
export async function setTokenCookie(token) {
    cookies().set('token', token);
}

export async function getUser() {
    const user = await api.get('user');
    console.log('user', user)
    return user;
}