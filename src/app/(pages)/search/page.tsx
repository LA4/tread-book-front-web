"use client";

import { RootState } from "@/components/provider/reduxProvider";
import SingleBook from "@/components/singleBook/singleBook";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BooksType } from "../home/page";

const API_THREADBOOK = process.env.API_THREADBOOK;
export default function Search() {
  const user = useSelector((state: RootState) => state.user.value);
  const [inputValue, setInputValue] = useState<string>("");
  const [books, setBooks] = useState<BooksType[] | null>(null);

  const fetchSearch = async () => {
    const response = await fetch(
      `${API_THREADBOOK}/search/${user.user_id}?q=${inputValue}`
    );
    const data = await response.json();
    setBooks(data);
  };

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (inputValue.length > 3) {
      fetchSearch();
    }
  };
  return (
    <>
      <div className="flex mt-[100px]">
        <div className="flex w-full justify-center items-center ">
          <input
            className="flex p-1 rounded-t-lg "
            type="text"
            placeholder="Find a book"
            onChange={(e) => {
              handleSearchValue(e);
              if (e.target.value === "") {
                setBooks((prev) => (prev = null));
              }
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[70px] gap-6">
        {books &&
          books.map((e: BooksType) => {
            if (e !== null) {
              return (
                <SingleBook
                  key={e._id}
                  id={e._id.toString()}
                  title={e.title}
                  pages={e.pages}
                  status={e.status}
                  opinion={e.opinion}
                  pageRead={e.pageRead}
                ></SingleBook>
              );
            }
          })}
      </div>
    </>
  );
}
