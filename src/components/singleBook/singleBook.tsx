"use client";
import { useEffect, useState } from "react";
import { BookStatus } from "@/app/(pages)/addBook/page";
import { useRouter } from "next/navigation";
import { ParsedUrlQueryInput } from "querystring";

type PropsSingleBook = {
    id: string;
    title: string;
    pages: string;
    pageRead: number;
    author: string;
    category: string;
    publisher: string;
    resume: string;
    status: BookStatus;
    opinion?: string;
};

export default function SingleBook({
    id,
    title,
    pages,
    author,
    category,
    publisher,
    resume,
    status,
    pageRead,
    opinion,
}: PropsSingleBook) {
    const [activeStatus, setActiveStatus] = useState(status);
    const router = useRouter();
    return (
        <div
            onClick={() => {
                if (id) {
                    router.push(`/booksDetails/${id}`);
                }
            }}
            className="flex p-4 text-[14px] rounded-[8px] bg-white border-2 border-beige-light w-[300px]  items-center shadow-md shadow-charcol/30 flex-col text-olive-dark font-raleway-normal "
        >
            <div className="flex justify-between flex-col">
                <h4 className="text-[18px] text-left mb-2 underline underline-offset-4">{title}</h4>
                <div className="flex items-center justify-center gap-2 text-center">
                    <span className="text-accent font-bold">{pageRead}</span>
                    <span className="text-gold text-[.7rem]"> / {pages}  pages</span>
                </div>
            </div>

            <div className="flex flex-col text-sm w-full">
                <span className="text-olive-light">Author :</span>
                <span className="w-full bg-gray  px-2">{author}</span>
                <span className="text-olive-light">Category :</span>
                <span className="w-full bg-gray px-2">{category}</span>

                <span className="text-olive-light">Publisher :</span>
                <span className="w-full bg-gray px-2">{publisher}</span>

            </div>

            <div className="flex flex-col items-center text-[12px]">
                <div className="flex p-2 text-charcol">{resume.slice(0, 150)} ...</div>
            </div>
            <div className="flex gap-2 justify-end font-bold text-olive-light w-full  mt-2">
                {activeStatus === "TO_BE_READ" && (
                    <span className="flex border-2 border-olive-light  border-1 rounded-lg py-1 px-2 text-[.6rem]">
                        To read
                    </span>
                )}
                {activeStatus === "READ" && (
                    <span className="flex border-2 border-olive-light  border-1 rounded-lg py-1 px-2 text-[.6rem]">
                        read
                    </span>
                )}
                {activeStatus === "CURRENTLY_READING" && (
                    <span className="flex border-2 border-olive-light  border-1 rounded-lg py-1 px-2 text-[.6rem]">
                        currently reading
                    </span>
                )}
            </div>
        </div >
    );
}
