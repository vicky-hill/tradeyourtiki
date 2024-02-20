'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
   
    console.error(error)
  }, [error])
 
  return (
    <div className='text-center mt-48'>
      <h2>Something went wrong!</h2>
    </div>
  )
}