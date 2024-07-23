"use client";

import { BooksType } from "@/app/(pages)/home/page";
import { Inputs } from "@/components/form/addBookForm";
import Modal from "@/components/modal/modal";
import { RootState } from "@/components/provider/reduxProvider";
import Icons from "@/components/svg/Icons";
import { pageRead } from "@/store/userReducer";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
const API_THREADBOOK = process.env.API_THREADBOOK

export default function BooksDetails({ params }: { params: { slug: string } }) {
  const user = useSelector((state: RootState) => state.user.value)
  const dispatch = useDispatch()
  const router = useRouter()
  const [bookData, setBookData] = useState<BooksType | null>(null);
  const [openResume, setOpenResume] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>()
  const fetchDetailsById = async (id: string) => {
    try {
      const response = await fetch(`${API_THREADBOOK}books/${id}/${user.user_id}`);
      const data = await response.json();
      setBookData((prev) => prev = data)
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
    const response = await fetch(`${API_THREADBOOK}books/update/${user.user_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookToUpdate)
    })
    const data = await response.json()
    if (data.userPages) {
      dispatch(pageRead(data.userPages))
    }
    router.replace('/home')
  }
  const fetchDeleteBook = async (id: number) => {
    const response = await fetch(`http://localhost:3000/books/delete/${id}/${user.user_id}`,
      { method: "DELETE" }
    )
    const data = await response.json()
    router.replace('/home')

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
  }
  const handleFavorite = async () => {
    const response = await fetch(`${API_THREADBOOK}favorite`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.user_id, bookId: params.slug })
    })
    const data = await response.json()
    console.log(data)
  }

  return (

    <div className="flex flex-col justify-center items-center h-full w-screen text-white my-[80px]">
      {
        bookData && (
          <form className="flex w-full justify-center items-center flex-col gap-2 p-2" onSubmit={handleSubmit(onsubmit)}>
            <div className="flex justify-between w-full px-4 border-olive-dark border-t-2 border-b-2 py-2 mb-4">
              <span className="flex h-[30px] cursor-pointer items-center text-olive-dark font-bold underline underline-offset-4" onClick={() => { router.replace('/home') }}>Back</span>
              {/* <span
                onClick={() => {
                  handleFavorite()
                }}
                className="flex h-[30px] cursor-pointer items-center text-olive-dark font-bold underline underline-offset-4"
              >add to favorite</span> */}
              <button className="flex h-[30px] cursor-pointer items-center text-olive-dark font-bold underline underline-offset-4" type="submit">Update</button>

            </div>
            <div className="flex flex-col gap-8 justify-center items-center m-8">
              <div className="flex items-center justify-center">
                <input
                  className="text-center w-1/2 bg-transparent underline flex text-[1.8rem] text-gold focus:ring-4 ring-transparent outline-0"
                  {...register("pageRead")} />
                <span className="flex w-1/5 text-olive-dark">/ {bookData.pages}</span>
              </div>

              <select {...register("status")} className="text-charcol flex bg-transparent  p-2 rounded-lg border-2 border-olive-dark  text-center" >
                <option className="text-charcol bg-gray" value="CURRENTLY_READING">Currently Reading</option>
                <option className="text-charcol bg-gray " value="TO_BE_READ">To Read</option>
                <option className="text-charcol bg-gray " value="READ">Read</option>
              </select>
            </div>
            <label htmlFor="title" className="flex flex-col items-center text-center justify-center ">
            </label>
            <input id="title" className="text-center bg-transparent flex p-1 w-full rounded-t-lg  mb-4 text-charcol border-b-2 " {...register("title")} />

            <label htmlFor="author" className="flex gap-3 items-center text-center justify-center">
              <span className="flex text-[.8rem] w-1/2 text-charcol m-2">Author :</span>
              <input className="w-1/2 text-center bg-transparent flex p-1 rounded-t-lg w-full text-[.8rem] text-olive-dark border-b-2 h-6" {...register("author")} />
            </label>

            <label htmlFor="category" className="flex gap-3 items-center text-center justify-center">
              <span className="flex text-[.8rem] w-1/2 text-charcol m-2">Category :</span>
              <input className="w-1/2 text-center bg-transparent flex p-1 rounded-t-lg w-full text-[.8rem] text-olive-dark border-b-2 h-6" {...register("category")} />
            </label>
            <label htmlFor="publisher" className="flex gap-3 items-center text-center justify-center">
              <span className="flex text-[.8rem] w-1/2 text-charcol m-2">Publisher :</span>
              <input className="w-1/2 text-center bg-transparent flex p-1 rounded-t-lg w-full text-[.8rem] text-olive-dark border-b-2 h-6" {...register("publisher")} />
            </label>



            {openResume ?
              <div className='flex flex-col w-full'>
                <textarea className='flex p-2 h-[300px] bg-white text-charcol'  {...register("resume")} />
                <span onClick={() => { setOpenResume(!openResume) }} className='bg-olive-dark justify-center flex p-1'> <Icons name="arrowUp"></Icons></span>
              </div>
              : <div className='flex flex-col w-full'>
                <div className='flex p-2 h-[100px] w-full bg-beigr-light text-olive-dark overflow-hidden '>{bookData.resume}</div>
                <span onClick={() => { setOpenResume(!openResume) }} className='bg-olive-dark justify-center flex p-1'> <Icons name="arrowDown"></Icons></span>
              </div>
            }

            <label htmlFor="opinion" className="flex w-[80%] flex-col font-bold">
            </label>
            <span className="text-charcol"> What about ?</span>
            <textarea id="opinion" className='flex p-2 h-[200px] w-full rounded-t-lg text-charcol m-1 bg-white border-2 border-olive-light text-charcol'  {...register("opinion")} />
            <div className="flex justify-between w-full px-8">

              {!openModal && <span className="flex h-[30px] cursor-pointer items-center text-[.8rem] text-olive-light font-bold underline underline-offset-4" onClick={() => { setOpenModal(!openModal) }}>delete book ?</span>}
              {openModal &&
                <Modal>
                  <div className="flex h-24 flex-col items-center justify-center text-olive-dark" >
                    <span>Realy you want to delete ?</span>
                    <div className="flex h-24  items-center justify-between w-1/2">
                      <span className="text-olive-dark" onClick={() => { setOpenModal(!openModal) }}>No</span>
                      <span className="text-olive-light" onClick={() => { fetchDeleteBook(bookData._id) }}>Yes</span></div>
                  </div>
                </Modal>}
              <button className="flex h-[30px] cursor-pointer items-center text-olive-dark font-bold underline underline-offset-4" type="submit">Update</button>
            </div>
          </form>
        )
      }

    </div >

  );
}
