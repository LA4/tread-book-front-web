import { BookProps } from '@/app/(pages)/addBook/page'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Icons from '../svg/Icons'
export type Inputs = {
    id: string,
    title: string,
    author: string | string[],
    category: string | string[],
    pages: string,
    publisher: string,
    opinion?: string,
    resume: string,
    status?: string,
    pageRead?: number
}
type FormProps = {
    data: BookProps | null,
    handleFormData: (data: Inputs) => void
}
export default function AddBookForm({ data, handleFormData }: FormProps) {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<Inputs>()
    const [openResume, setOpenResume] = useState<boolean>(false)
    useEffect(() => {
        if (data) {
            setValue("title", data.title)
            setValue("author", Array.isArray(data.author) ? data.author.join(', ') : data.author)
            setValue("category", Array.isArray(data.categories) ? data.categories.join(', ') : data.categories)
            setValue("pages", data.pageCount.toString())
            setValue("publisher", data.publisher)
            setValue("resume", data.description)
            setValue("id", data.id)
        }
    }, [data, setValue])
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        handleFormData(data)
        reset()
    }
    return (
        <form className="flex gap-2 flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input className="flex p-1 rounded-t-lg " placeholder="title" {...register("title")} />
            <div className="flex gap-4 w-full">
                <input className="flex p-1 rounded-t-lg " placeholder="author" {...register("author")} />
                <input className="flex p-1 rounded-t-lg w-1/3" placeholder="pages" {...register("pages")} />
            </div>
            <input className="flex p-1 rounded-t-lg " placeholder="category" {...register("category")} />
            <input className="flex p-1 rounded-t-lg " placeholder="publisher"  {...register("publisher")} />
            {openResume ?
                <div className='flex flex-col'>
                    <textarea placeholder="resume" className='flex p-2 h-[300px] rounded-t-lg'  {...register("resume")} />
                    <span onClick={() => { setOpenResume(!openResume) }} className='bg-olive-dark justify-center flex p-1'> <Icons name="arrowUp"></Icons></span>
                </div>
                : <div className='flex flex-col'>
                    <textarea placeholder="resume" className='flex p-2 h-[100px] rounded-t-lg'  {...register("resume")} />
                    <span onClick={() => { setOpenResume(!openResume) }} className='bg-olive-dark justify-center flex p-1'> <Icons name="arrowDown"></Icons></span>
                </div>
            }
            <input className="flex p-1 rounded-t-lg " type='hidden' {...register("id")} />
            <button type="submit">Add</button>
            <span onClick={() => {
                reset()
            }}>Reset</span>
        </form>
    )
}
