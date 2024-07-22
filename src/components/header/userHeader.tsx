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
        <header className="flex justify-center px-12 py-4 bg-charcol items-center fixed top-0 shadow-lg w-full shadow-charcol/30 rounded-b-full h-[70px]">
            <div className="flex max-w-[600px] justify-between text-olive-light items-center w-full ">
                <span onClick={() => router.replace('/profile')} className="flex cursor-pointer rounded-full w-[50px] h-[50px] border-2 bg-cover bg-center" style={{ backgroundImage: `url(${user.avatar})` }}>
                </span>
                <span className="text-white font-bold capitalize">{user.username}</span>
                <div className=" flex jystify-between items-center gap-2">
                    <span className="text-gold text-lg">{user.pages}</span>
                    <span className="text-[.8rem] text-olive-dark"> Pages</span>

                </div>
            </div>
        </header>
    )
}
