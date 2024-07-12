'use client'

import { avatar, user } from '@/store/userReducer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const API_THREADBOOK = process.env.API_THREADBOOK
type Inputs = {
    email: string,
    password: string
}

export default function Login() {

    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<Inputs>()
    const router = useRouter()
    const dispatch = useDispatch()
    const fetchLogin = async (logs: Inputs) => {
        const response = await fetch("http://localhost:3000/auth/signIn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(logs)
        })
        const data = await response.json()

        if (!data.error) {
            console.log("login:", data)
            const res2 = await fetch(`${API_THREADBOOK}files/${data.user.avatar}`)
            dispatch(avatar(res2.url))
            dispatch(user({
                user_id: data.user._id,
                username: data.user.username,
                email: data.user.email
            }))
            document.cookie = `access_token=${data.token.access_token}; path=/; samesite=strict`
            router.push('/home')
        }
    }


    const onSubmit: SubmitHandler<Inputs> = (data) => {

        fetchLogin(data)
        reset()
    }
    return (
        <div className='flex h-screen w-screen bg-background bg-cover bg-center flex-col justify-center items-center '>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 bg-charcol p-4'>
                <h4>Login</h4>
                <input className="flex p-1 rounded-t-lg " placeholder="email" {...register("email")} />
                <input className="flex p-1 rounded-t-lg " placeholder="password" {...register("password")} />
                <button type="submit"> login</button>
                <Link href={"/auth/signUp"}> sign up</Link>
            </form>
        </div>
    )
}
