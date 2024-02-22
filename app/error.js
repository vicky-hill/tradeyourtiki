'use client'

import { useState } from 'react'

export default function Error({ error, reset }) {
  let errorData;

  if (error && error.config) {
    errorData = {
      url: `${error.config.baseURL}${error.config.url}`,
      data: error.config.data
    }
  }

  return (
    <div className='text-center mt-48'>
      <h2>Something went wrong!</h2>
    </div>
  )
}