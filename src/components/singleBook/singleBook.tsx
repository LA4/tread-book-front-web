"use client";
import { useEffect, useState } from "react";
import { BookStatus } from "@/app/addBook/page";
import { useRouter } from "next/navigation";
import { ParsedUrlQueryInput } from "querystring";

type PropsSingleBook = {
  id: string;
  title: string;
  pages: string;
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
  opinion,
}: PropsSingleBook) {
  const [activeStatus, setActiveStatus] = useState(status);
  const router = useRouter();
  const query: ParsedUrlQueryInput = { id: id };
  return (
    <div
      onClick={() => {
        router.push(`/booksDetails/${id}`);
      }}
      className="flex p-4 text-[14px] rounded-[18px] bg-olive-light w-[100%] shadow-md shadow-charcol/40 flex-col text-olive-dark font-raleway-normal "
    >
      <div className="flex justify-between font-bold ">
        <span className="text-[14px]">{title}</span>
        <span className="flex items-center text-center">{pages} Pages</span>
      </div>
      <span className="text-sm">
        <span className="underline underline-offset-2">Author :</span> {author}
      </span>
      <div className="flex text-sm justify-between w-80% ">
        <span>
          <span className="underline underline-offset-2">Category :</span>{" "}
          {category}
        </span>
        <span>
          <span className="underline underline-offset-2">Publisher :</span>{" "}
          {publisher}
        </span>
      </div>

      <div className="flex flex-col items-center text-[12px]">
        <div className="flex p-2 text-charcol">{resume.slice(0, 150)} ...</div>
      </div>
      <div className="flex gap-2 justify-center font-bold text-olive-light mt-2">
        {activeStatus === "TO_BE_READ" && (
          <span className="flex bg-white border-1 rounded-lg py-1 px-2 text-[.6rem]">
            To read
          </span>
        )}
        {activeStatus === "READ" && (
          <span className="flex bg-white border-1 rounded-lg py-1 px-2 text-[.6rem]">
            read
          </span>
        )}
        {activeStatus === "CURRENTLY_READING" && (
          <span className="flex bg-white border-1 rounded-lg py-1 px-2 text-[.6rem]">
            currently reading
          </span>
        )}
      </div>
    </div>
  );
}
