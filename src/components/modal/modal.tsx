import React, { useState } from 'react'
import Icons from '../svg/Icons'
import { BookProps } from '@/app/addBook/page'


type ModalProps = {
    data: BookProps[] | null | undefined,
    handleCloseModal: (state: boolean) => void,
    handleChoosingBook: (id: string) => void,
    loading: boolean
}

export default function Modal({ data, handleCloseModal, loading = false, handleChoosingBook }: ModalProps) {
    const handleClick = (id: string) => {
        handleChoosingBook(id)
        handleCloseModal(false)
    }
    return (
        <div className='flex absolute w-screen bg-olive-light h-screen left-0 top-0 flex-col items-center'>

            <div className='flex flex-col p-3'>
                {loading &&
                    <div className="flex justify-center items-center">
                        <svg
                            className="animate-spin-slow h-8 w-8 text-charcol"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>}
                {data && data?.map((e) => {
                    return <div
                        onClick={() => { handleClick(e.id) }}
                        className=' text-charcol p-2 flex border-2 border-charcol  m-1 flex-col' key={e.id}>
                        <span><span className='font-bold'>Title : </span>{e.title}</span>
                        <span><span className='font-bold'>Author : </span> {e.author}</span>
                        <span><span className='font-bold'>Publisher : </span>{e.publisher}</span>
                    </div>
                })}
                <span
                    onClick={() => { handleCloseModal(false) }}
                    className="flex w-full bg-charcol justify-center fixed bottom-[70px] left-0 mt-1">
                    <Icons name="cross"></Icons>
                </span>
            </div>
        </div>
    )
}
