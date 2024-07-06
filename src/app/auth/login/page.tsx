'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


type Inputs = {
    email: string,
    password: string
}

export default function Login() {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<Inputs>()
    const router = useRouter()
    const fetchLogin = async (logs: Inputs) => {
        console.log(logs)
        const response = await fetch("http://localhost:3000/auth/signIn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(logs)
        })
        const data = await response.json()
        console.log("login:", data)
        if (!data.error) {
            document.cookie = `access_token=${data.access_token}; path=/; samesite=strict`
            router.push('/')
        }
    }


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        fetchLogin(data)
        reset()
    }
    return (
        <div className='flex flex-col justify-center items-center pt-[80px] gap-2'>
            <h4>Login</h4>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input className="flex p-1 rounded-t-lg " placeholder="email" {...register("email")} />
                <input className="flex p-1 rounded-t-lg " placeholder="password" {...register("password")} />
                <button type="submit"> login</button>
            </form>
        </div>
    )
}
