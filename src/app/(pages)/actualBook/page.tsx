'use client'
import Authentication from '@/hooks/authentication';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function
    actualBook() {
    const router = useRouter()
    // check authentication
    useEffect(() => {
        const checkAuthentication = async () => {
            const isAuthenticated = await Authentication();
            if (!isAuthenticated) {
                router.push('auth/login');
            }
        }
        checkAuthentication();
    }, [])
    return (
        <div>
            actualBook
        </div>
    )
}
