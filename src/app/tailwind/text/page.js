'use client'

export default function page({ }) {

    return (
        <>
            <div className='flex ml-8 my-12 space-x-36'>
                <div className='space-y-11 flex flex-col'>
                    <div>
                        <span className='text-sky-400 font-medium mr-3'>12px</span>
                        <span className='text-xs'>text-xs</span>
                    </div>
                    <div>
                        <span className='text-sky-400 font-medium mr-3'>14px</span>
                        <span className='text-xs'>text-xs</span>
                    </div>
                    <div>
                        <span className='text-sky-400 font-medium mr-3'>16px</span>
                        <span className='text-sm'>text-sm</span>
                    </div>
                    <div>
                        <span className='text-sky-400 font-medium mr-3'>18px</span>
                        <span className='text-base'>text-base</span>
                    </div>
                    <div>
                        <span className='text-sky-400 font-medium mr-3'>20px</span>
                        <span className='text-lg'>text-lg</span>
                    </div>
                    <div>
                        <span className='text-sky-400 font-medium mr-3'>24px</span>
                        <span className='text-xl'>text-xl</span>
                    </div>
                    <div>
                        <span className='text-sky-400 font-medium mr-3'>30px</span>
                        <span className='text-2xl'>text-2xl</span>
                    </div>
                </div>

                <div className='space-y-7 flex flex-col'>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>100</span>
                        <span className='font-thin'>font-thin</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>200</span>
                        <span className='font-extralight'>font-extralight</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>300</span>
                        <span className='font-light'>font-light</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>300</span>
                        <span className='font-light'>font-normal</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>500</span>
                        <span className='font-medium'>font-medium</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>600</span>
                        <span className='font-semibold'>font-semibold</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>700</span>
                        <span className='font-bold'>font-bold</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>800</span>
                        <span className='font-extrabold'>font-extrabold</span>
                    </div>
                    <div>
                        <span className='font-medium mr-3 text-sky-400'>900</span>
                        <span className='font-black'>font-black</span>
                    </div>
                </div>

                <div className='space-y-7 flex flex-col'>
                    <div className='space-y-3'>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>tracking-tighter</span>
                            <span className='tracking-tighter'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>tracking-tight</span>
                            <span className='tracking-tight'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400  w-32 inline-block code'>tracking-normal</span>
                            <span className='tracking-normal'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400  w-32 inline-block code'>tracking-wide</span>
                            <span className='tracking-wide'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400  w-32 inline-block code'>tracking-wider</span>
                            <span className='tracking-wider'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400  w-32 inline-block code'>tracking-widest</span>
                            <span className='tracking-widest'>The quick brown fox </span>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>leading-none</span>
                            <span className='leading-none'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>leading-tight</span>
                            <span className='leading-tight'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>leading-snug</span>
                            <span className='leading-snug'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>leading-normal</span>
                            <span className='leading-normal'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>leading-relaxed</span>
                            <span className='leading-relaxed'>The quick brown fox </span>
                        </div>
                        <div>
                            <span className='font-bold mr-3 text-sky-400 w-32 inline-block code'>leading-loose</span>
                            <span className='leading-loose'>The quick brown fox </span>
                        </div>
                    </div>
                </div>

                <div className='space-y-10 w-44 flex flex-col code'>
                    <div className='space-y-5'>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>text-left</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>text-center</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>text-right</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>text-justify</div>
                    </div>
                    <div className='space-y-5'>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>uppercase</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>lowercase</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>capitalize</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>normal-case</div>
                    </div>
                    <div className='space-y-5'>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>align-top</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>align-middle</div>
                        <div className='font-bold mr-3 text-sky-400 w-32 inline-block code'>align-bottom</div>

                    </div>
                </div>
            </div>
        </>
    )
}