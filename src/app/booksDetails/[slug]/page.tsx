"use client";
import { BookProps } from "@/app/addBook/page";
import { BooksType } from "@/app/page";
import { Inputs } from "@/components/form/addBookForm";
import Modal from "@/components/modal/modal";
import Icons from "@/components/svg/Icons";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


export default function BooksDetails({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [bookData, setBookData] = useState<BooksType | null>(null);
  const [openResume, setOpenResume] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>()
  const fetchDetailsById = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`);
      const data = await response.json();
      console.log("data", data)
      setBookData((prev) => prev = data)
      console.log(bookData)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUpdateBook = async (bookUpdate: Inputs) => {
    const bookToUpdate = {
      _id: bookData?._id,
      title: bookUpdate.title,
      pages: bookUpdate.pages,
      pageRead: bookUpdate.pageRead,
      author: bookUpdate.author,
      category: bookUpdate.category,
      publisher: bookUpdate.publisher,
      resume: bookUpdate.resume,
      opinion: bookUpdate.opinion,
      status: bookUpdate.status
    }


    const response = await fetch("http://localhost:3000/books/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookToUpdate)
    })
    const data = await response.json()
    router.push('/')
  }
  const fetchDeleteBook = async (id: number) => {
    const response = await fetch(`http://localhost:3000/books/delete/${id}`,
      { method: "DELETE" }
    )
    const data = await response.json()
    router.push('/')

  }
  useEffect(() => {
    fetchDetailsById(params.slug);
  }, [params.slug]);
  useEffect(() => {
    if (bookData) {
      setValue("title", bookData.title)
      setValue("author", bookData.author.name)
      setValue("category", bookData.category.name)
      setValue("pages", bookData.pages.toString())
      setValue("pageRead", bookData.pageRead)
      setValue("publisher", bookData.publisher.name)
      setValue("resume", bookData.resume)
      setValue("opinion", bookData.opinion)
      setValue("status", bookData.status)
      setValue("id", bookData._id.toString())
    }
  }, [bookData, setValue])
  const onsubmit: SubmitHandler<Inputs> = (data) => {
    fetchUpdateBook(data)
    console.log("fetch data", data)
  }

  return (
    <div className="flex h-full w-screen bg-charcol text-white my-[80px]">
      {
        bookData && (
          <form className="flex w-full justify-center items-center flex-col gap-2 p-2" onSubmit={handleSubmit(onsubmit)}>
            <div className="flex justify-between w-full px-4">
              <span className="flex h-[30px] items-center underline underline-offset-4" onClick={() => { router.push('/') }}>return</span>
              {!openModal && <span className="flex h-[30px] items-center underline underline-offset-4" onClick={() => { setOpenModal(!openModal) }}>DELETE</span>}
              {openModal &&
                <Modal>
                  <div className="flex h-24 flex-col items-center justify-center" >
                    <span>Realy you want to delete ?</span>
                    <div className="flex h-24  items-center justify-between w-1/2">
                      <span onClick={() => { setOpenModal(!openModal) }}>No</span>
                      <span onClick={() => { fetchDeleteBook(bookData._id) }}>Yes</span></div>
                  </div>
                </Modal>}
            </div>
            <div className="flex gap-2 justify-center items-center ">
              <input
                className="text-center w-1/2 bg-charcol flex text-[1.8rem] text-orange focus:ring-4 ring-transparent outline-0"
                {...register("pageRead")} />
              <span className="flex w-1/5 text-olive-light">/ {bookData.pages}</span>
            </div>

            <select {...register("status")} className="text-charcol flex bg-olive-light rounded-t-lg" >
              <option className="text-charcol" value="CURRENTLY_READING">Currently Reading</option>
              <option className="text-charcol" value="TO_BE_READ">To Read</option>
              <option className="text-charcol" value="READ">Read</option>
            </select>

            <label htmlFor="title" className="flex flex-col items-center text-center justify-center">{bookData?.title}
              <input className="text-center bg-charcol flex p-1 rounded-t-lg w-full text-[.8rem] text-olive-light border-b-2 h-6" {...register("title")} />
            </label>

            <label htmlFor="author" className="flex flex-col items-center text-center justify-center">{bookData?.author.name}
              <input className=" text-center bg-charcol flex p-1 rounded-t-lg w-full text-[.8rem] text-olive-light border-b-2 h-6" {...register("author")} />
            </label>

            <label htmlFor="category" className="flex flex-col items-center text-center justify-center">{bookData?.category.name}
              <input className=" text-center bg-charcol flex p-1 rounded-t-lg w-full text-[.8rem] text-olive-light border-b-2 h-6" {...register("category")} />
            </label>

            <label htmlFor="publisher" className="flex flex-col items-center text-center justify-center">{bookData?.publisher.name}
              <input className=" text-center bg-charcol flex p-1 rounded-t-lg w-full text-[.8rem] text-olive-light border-b-2 h-6" {...register("publisher")} />
            </label>

            {openResume ?
              <div className='flex flex-col w-full'>
                <textarea className='flex p-2 h-[300px] bg-charcol'  {...register("resume")} />
                <span onClick={() => { setOpenResume(!openResume) }} className='bg-olive-dark justify-center flex p-1'> <Icons name="arrowUp"></Icons></span>
              </div>
              : <div className='flex flex-col w-full'>
                <textarea className='flex p-2 h-[100px] w-full bg-charcol '  {...register("resume")} />
                <span onClick={() => { setOpenResume(!openResume) }} className='bg-olive-dark justify-center flex p-1'> <Icons name="arrowDown"></Icons></span>
              </div>
            }

            <label htmlFor="opinion" className="flex w-full">
              <textarea className='flex p-2 h-[100px] rounded-t-lg w-screen text-charcol m-2'  {...register("opinion")} />

            </label>
            <button className="flex h-[70px] items-center underline underline-offset-4" type="submit">Update</button>
          </form>

        )
      }
    </div >
  );
}
