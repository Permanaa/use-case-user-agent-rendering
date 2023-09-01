import HomeDesktopContainer from "@/containers/Home/Desktop"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const HomeDesktop = () => {
  const { asPath, route } = useRouter()

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <p>user agent middleware</p>
      <HomeDesktopContainer />
      <p>{isClient ? asPath : ""} {"->"} {route}</p>
      <p>*asPath in router is client side</p>
      <Link href="/">to Home</Link>
    </>
  )
}

export default HomeDesktop
