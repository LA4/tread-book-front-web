'use client'
import UserFooter from "@/components/footer/userFooter";
import UserHeader from "@/components/header/userHeader";
import Authentication from "@/hooks/authentication";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const router = useRouter()
  const pathname = usePathname();
  const [changes, setChanges] = useState(false);
  const [ifAuthenticate, setIsAuthenticate] = useState(false)

  const checkAuthentication = async () => {
    const data = await Authentication()
    setIsAuthenticate(data.result)
    if (!data.result) {
      router.replace('auth/login')
    }
  }

  useEffect(() => {
    checkAuthentication()
    setChanges(!changes);
    if (changes) {
      checkAuthentication()
    }
  }, [pathname])

  return (
    <>
      {ifAuthenticate ?
        <>
          <UserHeader />
          {children}
          <UserFooter />
        </> :
        <span>attends ...</span>
      }
    </>

  )


}
