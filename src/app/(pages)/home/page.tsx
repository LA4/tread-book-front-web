"use client";

import CategorySelector from "@/components/categorySelector/categorySelector";
import SingleBook from "@/components/singleBook/singleBook";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/provider/reduxProvider";
import { BookStatus } from "@/hooks/enum";

const API_THREADBOOK = process.env.API_THREADBOOK;

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
  const user = useSelector((state: RootState) => state.user.value);
  const [books, setBooks] = useState<BooksType[] | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [paginate, setPaginate] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number[]>([]);
  const [status, setStatus] = useState(null);
  const [page, setPage] = useState<number>(1);
  const limitOfPage: number = 5;
  const fetchingAllBooks = async () => {
    try {
      const response = await fetch(
        `${API_THREADBOOK}/books/${user.user_id}?documentToSkip=${paginate}&limitOfDocuments=${limitOfPage}API_THREADBOOK`
      );
      const data = await response.json();
      setBooks(data.results);
      countPage(data.count, limitOfPage);
    } catch (error) {
      console.error(error);
    }
  };
  const countPage = (countPage: number, limitOfDocuments: number) => {
    let listPages = [];
    for (let i = 0; i < Math.ceil(countPage / limitOfDocuments); i++) {
      listPages.push(i);
      setPageCount(listPages);
    }
  };
  const fetchBookFromStatus = async (status: string) => {
    try {
      const response = await fetch(
        `${API_THREADBOOK}/books/status/${user.user_id}?status=${status}&documentToSkip=${paginate}&limitOfDocuments=${limitOfPage}`
      );
      const data = await response.json();
      setBooks(data.results);
      countPage(data.count, limitOfPage);
    } catch (error) {
      console.error(error);
    }
  };
  const handleStatus = (data: any) => {
    setStatus(data);
    if (data === "null") {
      setStatus(null);
      fetchingAllBooks();
      return;
    }
    fetchBookFromStatus(data);
  };
  useEffect(() => {
    if (status !== null) {
      fetchBookFromStatus(status);
      return;
    }
    fetchingAllBooks();
  }, [paginate, status]);
  return (
    <main className=" flex p-[12px] flex-col gap-4 my-[70px] py-[24px] justify-center items-center ">
      <div className="flex flex-col gap-2 items-center bg-transparent ">
        <CategorySelector handleStatus={handleStatus} />
      </div>
      <section className="flex gap-4 flex-col md:flex-row items-center h-full min-h-screen md:w-[800px] md:items-start md:justify-center overflow-hidden md:flex-wrap ">
        {books &&
          books.map((e: BooksType) => {
            if (e !== null) {
              return (
                <div
                  className="flex justify-center"
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
      </section>
      <ul className="flex gap-2 justify-center">
        {pageCount.length > 1 &&
          pageCount.map((e, i) => {
            return (
              <li
                className={`flex bg-beige-light  w-10 justify-center p-2 ${
                  e + 1 === page ? "text-accent border-b-2" : "text-gray"
                }`}
                onClick={() => {
                  setPage(e + 1);
                  setPaginate(e * limitOfPage);
                }}
                key={i}
              >
                {e + 1}
              </li>
            );
          })}
      </ul>
    </main>
  );
}
