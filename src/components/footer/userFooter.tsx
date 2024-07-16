'use client'

import Link from "next/link"
import Icons from "../svg/Icons"


export default function UserFooter() {


    return (
        <footer className="flex h-[70px] bg-white items-center fixed bottom-0 w-full z-40"
        >
            <Link href="/home" className="flex justify-center flex-col items-center text-[12px] gap-1 w-1/3">

                <Icons name="home"></Icons>
                <span>Home</span>

            </Link>
            <Link href="/addBook" className="flex justify-center flex-col items-center text-[12px] gap-1 w-1/3">

                <Icons name="add"></Icons>
                <span>Add book</span>

            </Link>
            <Link href="/favorite" className="flex justify-center flex-col items-center text-[12px] gap-1 w-1/3">

                <Icons name="book"></Icons>
                <span>My reading book</span>

            </Link>

        </footer>
    )
}
