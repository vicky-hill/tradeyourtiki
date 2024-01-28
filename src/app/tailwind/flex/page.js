'use client'

export default function page({ }) {

    return (
        <>
            <div className='flex code ml-8 my-12 space-x-10'>
                <div className='space-y-6'>
                    <div className='flex items-center'>
                        <div class="flex justify-start bg-sky-100 space-x-3 rounded w-48">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>justify-start</span>
                    </div>

                    <div className='flex items-center'>
                        <div class="flex justify-center bg-sky-100 space-x-3 rounded w-48">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>justify-center</span>
                    </div>

                    <div className='flex items-center'>
                        <div class="flex justify-end bg-sky-100 space-x-3 rounded w-48">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>justify-end</span>
                    </div>

                    <div className='flex items-center'>
                        <div class="flex justify-between bg-sky-100 rounded w-48">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>justify-between</span>
                    </div>

                    <div className='flex items-center'>
                        <div class="flex justify-around bg-sky-100 rounded w-48">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>justify-around</span>
                    </div>

                    <div className='flex items-center'>
                        <div class="flex justify-evenly bg-sky-100 rounded w-48">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>justify-evenly</span>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <div class="flex items-stretch justify-between bg-sky-100 space-x-2 rounded w-36 h-20">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>items-stretch</span>
                    </div>
                    <div className='flex items-center'>
                        <div class="flex items-start justify-between bg-sky-100 space-x-2 rounded w-36 h-20">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>items-start</span>
                    </div>
                    <div className='flex items-center'>
                        <div class="flex items-center justify-between bg-sky-100 space-x-2 rounded w-36 h-20">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>items-center</span>
                    </div>
                    <div className='flex items-center'>
                        <div class="flex items-end justify-between bg-sky-100 space-x-2 rounded w-36 h-20">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>items-end</span>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <div class="flex bg-sky-100 space-x-2 rounded w-44">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white grow'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>grow</span>
                    </div>
                    <div className='flex items-center'>
                        <div class="flex bg-sky-100 space-x-2 rounded w-44">
                            <div className='bg-sky-300 rounded p-3 text-white grow-0'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white grow'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white grow'>03</div>
                        </div>
                        <span className='ml-5'>grow-0</span>
                    </div>
                    <div className='flex items-center'>
                        <div class="flex flex-wrap bg-sky-100 space-x-2 rounded w-44">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>flex-row</span>
                    </div>
                    <div className='flex items-center'>
                        <div class="flex flex-col space-y-2 bg-sky-100 rounded w-44">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>flex-col</span>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className='flex flex-nowrap items-center'>
                        <div class="flex flex-wrap bg-sky-100 gap-2 rounded w-44">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>04</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>05</div>
                        </div>
                        <span className='ml-5'>flex-wrap</span>
                    </div>
                    <div className='flex flex-nowrap items-center'>
                        <div class="flex flex-nowrap bg-sky-100 gap-2 rounded w-44">
                            <div className='bg-sky-300 rounded p-3 text-white'>01</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>02</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                            <div className='bg-sky-300 rounded p-3 text-white'>03</div>
                        </div>
                        <span className='ml-5'>flex-nowrap</span>
                    </div>
                </div>
            </div>
        </>
    )
}