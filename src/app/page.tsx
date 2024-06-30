'use client'

import CategorySelector from "@/components/categorySelector/categorySelector"
import SingleBook from "@/components/singleBook/singleBook"
import { useEffect, useState } from "react"
import { BookStatus } from "./addBook/page"
import Modal from "@/components/modal/modal"
type BooksType = {
  _id: number,
  title: string,
  pages: string,
  author: { name: string },
  category: { name: string },
  publisher: string,
  resume: string,
  opinion: string,
  status: BookStatus
}
export default function Home() {
  const [books, setBooks] = useState<BooksType[] | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const fetchingAllBooks = async () => {
    try {

      const response = await fetch("http://localhost:3000/books")
      const data = await response.json()

      setBooks(data)
    } catch (error) {
      console.error(error)
    }
  }


  const fetchBookFromStatus = async (status: string) => {
    try {
      const response = await fetch(`http://localhost:3000/books/status/${status}`)
      const data = await response.json()
      setBooks(data)
      console.log("fetchBookFromStatus:", data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleStatus = (data: any) => {
    fetchBookFromStatus(data)
  }
  useEffect(() => {
    fetchingAllBooks()
  }, [])
  return (
    <main className="flex p-[12px] flex-col gap-4 my-[70px] py-[24px] "
    >



      <div>
        <CategorySelector handleStatus={handleStatus} />
      </div>

      {
        books && books.map((e: BooksType) => {
          console.log("en bas :", books)
          if (e !== null) {
            return <div onClick={() => { setOpenModal(true) }}>
              <SingleBook
                key={e._id}
                title={e.title}
                author={e.author.name}
                pages={e.pages}
                resume={e.resume}
                category={e.category.name}
                publisher=""
                status={e.status}
              ></SingleBook>
            </div>
          }
        })
      }
    </main>
  )
}
