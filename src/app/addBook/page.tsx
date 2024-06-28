'use client'

import InputField from "@/components/inputField/inputField";
import Modal from "@/components/modal/modal";
import SingleBook from "@/components/singleBook/singleBook";
import { useEffect, useState } from "react";
import { isBuffer } from "util";

export type BookProps = {
  id: string,
  title: string,
  pageCount: number,
  categories: string[],
  author: string[],
  publisher: string,
  description: string
}
export default function AddPage() {
  const [value, setValue] = useState("")
  const [modal, setModal] = useState<boolean>(false)
  const [dataFormated, setdataFormated] = useState<BookProps[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [choosingBook, setChoosingBook] = useState<BookProps[] | null>(null)
  const handleInputValue = (data: string) => {
    setValue(data)
    console.log(value)
  }
  const SearchBookAPI = async () => {
    if (value.trim() === "") {
      return
    }
    try {
      setLoading(true)
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=5&printType=books`)
      const data = await response.json()
      setdataFormated(data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        pageCount: item.volumeInfo.pageCount,
        categories: item.volumeInfo.categories,
        author: item.volumeInfo.authors,
        publisher: item.volumeInfo.publisher,
        description: item.volumeInfo.description
      })))

    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }
  const handleCloseModal = (data: boolean) => {
    setModal(data)
    setdataFormated(null)
  }
  const handleChoosingBook = (id: string) => {
    if (dataFormated) {
      setChoosingBook(dataFormated.filter(e => e.id === id))
    }
  }
  return (
    <main className="flex p-[12px] flex-col gap-4 my-[70px] py-[24px] ">

      {modal && <Modal
        loading={loading}
        data={dataFormated}
        handleCloseModal={handleCloseModal}
        handleChoosingBook={handleChoosingBook}
      ></Modal>}
      <h4 className="flex justify-center w-full ">Reading a new book</h4>

      <div className="flex gap-4 px-2 items-center">
        <InputField placeholder="Search a book" handleInputValue={handleInputValue}></InputField>
        <button
          className="flex bg-charcol font-bold text-sm text-beige-light p-2 rounded-full h-[30px] justify-center items-center"
          onClick={() => {
            if (value.trim() === "") {
              return
            }
            SearchBookAPI()
            setModal(true)
          }}
        >search</button>
      </div>

      <div>
        {choosingBook && choosingBook.map(e => <span>{e.title}</span>)}
      </div>


    </main>)
}
