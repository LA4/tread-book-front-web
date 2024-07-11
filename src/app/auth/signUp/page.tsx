'use client'

import { user } from '@/store/userReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'


type Inputs = {
    username: string
    email: string,
    password: string,
}

export default function SignUP() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        fetchSignUp(data)
        // reset()
    }
    const fetchSignUp = async (userData: Inputs) => {
        const response = await fetch("http://localhost:3000/auth/signUp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        })
        const data = await response.json()
        console.log(data)
        if (data.error) {
            setError("root.serverError", {
                type: data.error,
                message: data.message
            })
        }
        if (data.token.access_token) {
            dispatch(user({
                user_id: data.user._id,
                username: data.user.username,
                email: data.user.email
            }))
            document.cookie = `access_token=${data.token.access_token}; path=/; samesite=strict`
            router.push('/home')
        }
    }
    return (
        <div className=' flex-col w-screen bg-background  bg-cover bg-center flex pt-[100px] h-screen justify-center items-center'>
            <h4>Sign up</h4>
            <form className='flex gap-2 flex-col items-center' action="" onSubmit={handleSubmit(onSubmit)}>
                {errors.root?.serverError !== undefined && <div className='flex flex-col text-[red] text-[.7rem]'>{errors.root?.serverError.message}</div>}
                {errors.username && <p className='flex flex-col text-[red] text-[.7rem]'>{errors.username.message}</p>}
                <input className="flex p-1 rounded-t-lg " placeholder="Username" {...register("username", {
                    required: "please enter your Username"
                })} />
                {errors.email && <p className='flex flex-col text-[red] text-[.7rem]'>{errors.email.message}</p>}
                <input className="flex p-1 rounded-t-lg " placeholder="Email" {...register("email", {
                    required: "please enter your email"
                })} />
                {errors.password && <p className='flex flex-col text-[red] text-[.7rem]'>{errors.password.message}</p>}
                <input type="password" className="flex p-1 rounded-t-lg " placeholder="Password" {...register("password", {
                    required: "please enter your password"
                })} />
                <button type="submit"> Register</button>
            </form>
            <Link href={"/auth/login"}>You already have an accout ?</Link>
        </div>
    )
}
