'use client'

import { useState } from 'react'
import NextImage from 'next/image'
import placeholder from '../../public/placeholder.png'

export default function Image({ src, className, alt = 'image description', ...rest }) {

    const [imgSource, setImgSrc] = useState(() => (
        src ? src : placeholder
    ));

    return (
        <div style={{ position: 'relative'}} className={className}>
            <NextImage
                src={imgSource}
                fill
                style={{ objectFit: 'contain' }}
                alt={alt}
                priority
                onError={() => {
                    setImgSrc(placeholder)
                }}
                {...rest}
            />
        </div>
    )
}