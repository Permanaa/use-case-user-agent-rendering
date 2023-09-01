import type { InferGetServerSidePropsType, GetServerSideProps } from "next"
import HomeDesktop from "@/containers/Home/Desktop"
import HomeMobile from "@/containers/Home/Mobile"
import Link from "next/link"

export default function Home({
  isMobile
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <p>user agent server side props</p>
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
      <Link href="/landing-page">to Landing Page</Link>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  isMobile: boolean
}> = async (ctx) => {
  const userAgents = ctx.req.headers["user-agent"]
  const isMobile = Boolean(userAgents?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  return {
    props: {
      isMobile
    }
  }
}
