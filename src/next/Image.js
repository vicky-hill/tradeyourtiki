'use client'

import { useState } from 'react'
import NextImage from 'next/image'
import placeholder from '../../public/placeholder.png'

export default function Image({ src, className, alt = 'image description' }) {

    const [imgSource, setImgSrc] = useState(() => (
        src
            ? src
            : placeholder
    ))

    return (
        <div className={`relative ${className}`}>
            <NextImage
                src={imgSource}
                layout="fill"
                objectFit='contain'
                alt={alt}
                priority
                onError={() => {
                    setImgSrc(placeholder)
                }}
            />
        </div>
    )
}