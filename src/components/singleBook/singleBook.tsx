'use client'
import { useState } from "react"
import Icons from "../svg/Icons"

type PropsSingleBook = {
    title: string,
    pages: string,
    author: string,
    category: string,
    publisher: string,
    resume: string,
    isReading: boolean,
    opinion?: string
}

export default function SingleBook({ title, pages, author, category, publisher, resume, isReading, opinion }: PropsSingleBook) {

    const [showResume, setShowResume] = useState<boolean>(false)

    const handleResume = () => {
        setShowResume(!showResume)
    }

    return (

        <div className="flex p-4 rounded-[28px] bg-olive-light w-[100%] shadow-md shadow-charcol/40 flex-col text-olive-dark font-raleway-normal ">
            <div className="flex justify-between font-bold ">
                <span>{title}</span>
                {isReading ?
                    <span><input></input>/ {pages} pages</span>
                    : <span>{pages} Pages</span>}

            </div>
            <span className="text-sm">{author}</span>
            <div className="flex text-sm justify-between w-80% ">
                <span>{category}</span>
                <span>{publisher}</span>
            </div>
            {
                isReading ?
                    <textarea value={opinion} />
                    : <div
                        className=" flex justify-center mt-2 transition duration-75 text-sm text-justify"
                        onClick={() => { handleResume() }}>
                        {
                            showResume ?
                                <div className="flex flex-col items-center">

                                    <div>
                                        {resume.slice(0, 150)} ...
                                    </div>
                                    <div>
                                        {opinion} dpjefgkhnqmosjlghbmlsjehbnmeljhbn
                                    </div>
                                    <Icons name="arrowUp"></Icons>
                                </div>

                                : <Icons name="arrowDown"></Icons>
                        }
                    </div>

            }
        </div>

    )
}