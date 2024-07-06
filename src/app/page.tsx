"use client";

import CategorySelector from "@/components/categorySelector/categorySelector";
import SingleBook from "@/components/singleBook/singleBook";
import { useEffect, useReducer, useState } from "react";
import { BookStatus } from "./addBook/page";
import Authentication from "@/hooks/authentication";
import { useRouter } from "next/navigation";
export type BooksType = {
  _id: number;
  title: string;
  pages: string;
  pageRead: number;
  author: { name: string };
  category: { name: string };
  publisher: { name: string };
  resume: string;
  opinion: string;
  status: BookStatus;
};
export default function Home() {
  const router = useRouter()
  // check authentication
  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await Authentication();
      if (!isAuthenticated) {
        router.push('auth/login');
      }
    }
    checkAuthentication();
  }, [])



  const [books, setBooks] = useState<BooksType[] | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const fetchingAllBooks = async () => {
    try {
      const response = await fetch("http://localhost:3000/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBookFromStatus = async (status: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/books/status/${status}`
      );
      const data = await response.json();
      setBooks(data);

    } catch (error) {
      console.error(error);
    }
  };
  const handleStatus = (data: any) => {
    if (data === "null") {
      fetchingAllBooks()
      return
    }
    fetchBookFromStatus(data);
  };
  useEffect(() => {
    fetchingAllBooks();
  }, []);
  return (
    <main className="flex p-[12px] flex-col gap-4 my-[70px] py-[24px] ">
      <div className="flex flex-col gap-2 items-center">
        <CategorySelector handleStatus={handleStatus} />
      </div>

      {books &&
        books.map((e: BooksType) => {
          if (e !== null) {
            return (
              <div
                key={e._id}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <SingleBook
                  id={e._id.toString()}
                  title={e.title}
                  author={e.author.name}
                  pages={e.pages}
                  resume={e.resume}
                  category={e.category.name}
                  publisher={e.publisher.name}
                  status={e.status}
                  pageRead={e.pageRead}
                ></SingleBook>
              </div>
            );
          }
        })}
    </main>
  );
}
