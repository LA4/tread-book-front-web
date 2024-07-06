
import { BookStatus } from '@/app/(pages)/addBook/page'
import React, { useEffect, useState } from 'react'

type StatusProps = {
    handleStatus: (status: string | undefined) => void
}

export default function CategorySelector({ handleStatus }: StatusProps) {

    const [status, setStatus] = useState<string>()

    return (
        <div className="flex text-beige-light gap-2 px-2 justify-between overflow-x-auto w-full h-8 border-y-2 border-charcol">
            <span
                onClick={() => {
                    setStatus("")
                    handleStatus("null")
                }}
                className={`flex items-center text-[14px] text-charcol p-2 rounded-lg ${status === "" && " font-bold "}`} >All</span>
            <span
                onClick={() => {
                    setStatus("Read")
                    handleStatus("Read")
                }}
                className={`flex items-center text-[14px] text-charcol p-2 rounded-lg ${status === "Read" && " font-bold "}`} >Read</span>
            <span
                onClick={() => {
                    setStatus("Reading")
                    handleStatus("Reading")
                }}
                className={`flex items-center text-[14px] p-2 text-charcol rounded-lg ${status === "Reading" && " font-bold "}`}>Currently reading</span>
            <span
                onClick={() => {
                    setStatus("toBeRead")
                    handleStatus("toBeRead")
                }}
                className={`flex items-center text-[14px] p-2 text-charcol rounded-lg ${status === "toBeRead" && " font-bold "}`}>To Read</span>
        </div >
    )
}
