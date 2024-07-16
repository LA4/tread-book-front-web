import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <div className='flex h-screen w-screen bg-background bg-cover bg-center flex-col justify-center items-center '>

            <h1 className='text-white font-bold text-[5rem] leading-none text-center z-10'>Thread Book</h1>
            <div className='flex   w-screen opacity-40 h-screen bg-charcol absolute gap-10 '>
            </div>
            <Link
                className=' flex w-[200] h-200 justify-center items-center z-50 text-white text-[1.5rem] underline-offset-4 underline leading-none' href={'/home'}>enter</Link>
        </div >
    )
}
