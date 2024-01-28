'use client'

export default function page({ }) {

    return (
        <div className='flex space-x-24'>
            <div className='my-12 space-y-7 code'>
                <div className='bg-sky-200 rounded px-4 py-2 w-max'>
                    display
                </div>
                <div className='space-y-5'>
                    <p className='ml-2'>block</p>
                    <p className='ml-2'>inline-block</p>
                    <p className='ml-2'>flex</p>
                    <p className='ml-2'>grid</p>
                    <p className='ml-2'>hidden</p>
                </div>
            </div>

            <div className='my-12 space-y-7 code'>
                <div className='bg-sky-200 rounded px-4 py-2 w-max'>
                    position
                </div>
                <div className='space-y-5'>
                    <p className='ml-2'>static</p>
                    <p className='ml-2'>fixed</p>
                    <p className='ml-2'>relative</p>
                    <p className='ml-2'>absolute</p>
                    <p className='ml-2'>sticky</p>
                </div>
            </div>

            <div className='my-12 space-y-7 code'>
                <div className='bg-sky-200 rounded px-4 py-2 w-max'>
                    object-fit
                </div>
                <div className='space-y-5'>
                    <p className='ml-2'>object-contain</p>
                    <p className='ml-2'>object-cover</p>
                    <p className='ml-2'>object-fill</p>
                    <p className='ml-2'>object-none</p>
                    <p className='ml-2'>sticky</p>
                </div>
            </div>

            <div className='my-12 space-y-7 code'>
                <div className='bg-sky-200 rounded px-4 py-2 w-max'>
                    overflow
                </div>
                <div className='space-y-5'>
                    <p className='ml-2'>overflow-auto</p>
                    <p className='ml-2'>overflow-hidden</p>
                    <p className='ml-2'>overflow-scroll</p>
                    <p className='ml-2'>overflow-x-hidden</p>
                    <p className='ml-2'>overflow-y-hidden</p>
                    <p className='ml-2'>overflow-x-scroll</p>
                    <p className='ml-2'>overflow-y-scroll</p>
                </div>
            </div>

            <div className='my-12 space-y-7 code'>
                <div className='bg-sky-200 rounded px-4 py-2 w-max'>
                    overflow
                </div>
                <div className='space-y-5'>
                    <p className='ml-2'>overflow-auto</p>
                    <p className='ml-2'>overflow-hidden</p>
                    <p className='ml-2'>overflow-scroll</p>
                    <p className='ml-2'>overflow-x-hidden</p>
                    <p className='ml-2'>overflow-y-hidden</p>
                    <p className='ml-2'>overflow-x-scroll</p>
                    <p className='ml-2'>overflow-y-scroll</p>
                </div>
            </div>

            <div className='my-12 space-y-7 code'>
                <div className='bg-sky-200 rounded px-4 py-2 w-max'>
                    spacing
                </div>
                <div className='space-y-5'>
                    <p className='ml-2'>space-x-0</p>
                    <p className='ml-2'>space-y-0</p>
                    <p className='ml-2'>space-x-px</p>
                    <p className='ml-2'>space-y-px</p>
                    <p className='ml-2'>space-x-reverse</p>
                    <p className='ml-2'>space-y-reverse</p>
                </div>
            </div>
        </div>
    )
}