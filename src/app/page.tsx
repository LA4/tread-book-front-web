'use client'

import SingleBook from "@/components/singleBook/singleBook"
import { useEffect, useState } from "react"
type BooksType = {
  _id: number,
  title: string,
  pages: string,
  author: { name: string },
  category: { name: string },
  publisher: string,
  resume: string,
  isReading: boolean,
  opinion: string
}
export default function Home() {
  const [books, setBooks] = useState<BooksType[]>([])
  const [isReading, setIsReading] = useState<BooksType>()

  const fetchBooks = async () => {
    try {
      const response = await fetch(" http://localhost:3000/books/")
      const data = await response.json()
      setBooks(data)
    } catch (error) {
      console.error(error)
    }
  }
  const fetchBookIsReading = async () => {
    const response = await fetch("http://localhost:3000/books/status/isRead")
    const data = await response.json()
    console.log(data)
    setIsReading(prevData => prevData = data[0])
    fetchBooks()
  }
  useEffect(() => {
    fetchBooks()
    fetchBookIsReading()
  }, [])
  return (
    <main className="flex p-[12px] flex-col gap-4 my-[70px] py-[24px] "
    >

      {isReading && <SingleBook
        title={isReading.title}
        author={isReading.author.name}
        pages={isReading.pages}
        resume={isReading.resume}
        category={isReading.category.name}
        publisher=""
        isReading={isReading.isReading}
        opinion={isReading.opinion}
      ></SingleBook>}

      <div>
        Selection des categories
      </div>

      {
        books && books.map((e: BooksType) => {
          return <SingleBook
            key={e._id}
            title={e.title}
            author={e.author.name}
            pages={e.pages}
            resume={e.resume}
            category={e.category.name}
            publisher=""
            isReading={e.isReading}
          ></SingleBook>
        })
      }
    </main>
  )
}
