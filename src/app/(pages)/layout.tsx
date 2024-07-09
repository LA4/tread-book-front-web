'use client'
import UserFooter from "@/components/footer/userFooter";
import UserHeader from "@/components/header/userHeader";
import Authentication from "@/hooks/authentication";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const router = useRouter()
  const [isAuthenticated, setAuthenticated] = useState<boolean | undefined>(false)
  const checkAuthentication = async () => {
    const data = await Authentication()
    if (!data.result) {
      router.push('auth/login');
    }
    setAuthenticated(!isAuthenticated)
    fechUserInfo(data.email)
  }
  const fechUserInfo = async (email: string) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${email}`)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      router.push('error')
      console.log(error)
    }
  }
  useEffect(() => {
    checkAuthentication()
  }, [children])

  if (isAuthenticated) {

    return (
      <>
        <UserHeader username="Ludovic" pages="300" />
        {children}
        < UserFooter />
      </>

    )
  }

}
