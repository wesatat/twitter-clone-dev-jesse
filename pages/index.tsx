import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
//<link rel="icon" href="/favicon.ico" />

interface Props{
  tweets:Tweet[]
}
//className="bg-red overflow-x-scroll"
const Home = ({tweets}:Props) => {
  console.log(tweets)
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter Clone DevJesse</title>
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <main className="grid grid-cols-9">
        {/* Side Bar */}
        <SideBar />
        {/* Feed */}
        <Feed tweets={tweets} />

        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets()

  return {
    props: {
      tweets,
    },
  }
}
