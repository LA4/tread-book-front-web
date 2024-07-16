'use client'

import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../provider/reduxProvider"
import { useEffect, useState } from "react"




export default function UserHeader() {
    const userStore = useSelector((state: RootState) => state.user.value)
    const [user, setUser] = useState(userStore)

    const router = useRouter()

    useEffect(() => {
        setUser(userStore)
    }, [userStore])

    return (
        <header className="flex justify-between px-6 py-4 bg-olive-dark text-beige-light items-center fixed top-0 w-full ">
            <span onClick={() => router.replace('/profile')} className="flex rounded-full w-[50px] h-[50px] border-2 bg-cover bg-center" style={{ backgroundImage: `url(${user.avatar})` }}>
            </span>
            <span>{user.username}</span>
            <div className=" flex flex-col items-center">
                <span className="text-orange font-bold text-lg">{user.pages}</span>
                <span className="text-sm font-bold">Pages</span>

            </div>
        </header>
    )
}
