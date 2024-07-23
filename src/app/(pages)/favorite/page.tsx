'use client'

import { RootState } from '@/components/provider/reduxProvider';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BooksType } from '../home/page';
const API_THREADBOOK = process.env.API_THREADBOOK
export default function Favorite() {
    const user = useSelector((state: RootState) => state.user.value)
    const [favorite, setFavorite] = useState<BooksType | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const fetchFavorites = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${API_THREADBOOK}favorite/get`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user: user.user_id })
            })
            const data = await response.json()
            console.log(data)
            setFavorite(prev => prev = data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchFavorites();
    }, [])
    return (
        <div>page de recherche de livre

        </div>
    )
}
