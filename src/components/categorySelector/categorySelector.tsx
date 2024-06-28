
import React, { useEffect, useState } from 'react'

type categorieProp = {
    _id: string,
    name: string
}

export default function CategorySelector() {

    const [categories, setCategories] = useState<categorieProp[]>([])
    const getCategories = async () => {

        const response = await fetch("http://localhost:3000/category")
        const data = await response.json()
        setCategories([...data])
    }
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className="flex text-beige-light gap-2 overflow-x-auto w-full">
            {categories && categories.map((e) => {
                return <span key={e._id} className="shrink-0 flex bg-charcol w-50 h-8 rounded-[12px] px-2 items-center justify-center">{e.name}</span>
            })}
        </div>
    )
}
