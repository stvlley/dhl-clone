import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <div className="">
      <Head>
        <title>DHL Clone</title>
        <link rel="icon" href="/dhl-logo.jpg" />
      </Head>

      <Navbar />


    </div>

    </>
  )
}

export default Home
