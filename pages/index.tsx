import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/Navbar'
import TrackShipmentBanner from './components/TrackShipmentBanner'
import ImportServiceUpdates from './components/ImportServiceUpdates'
import DocAndParcel from './components/DocAndParcel'

const Home: NextPage = () => {
  return (
    <>
      <div className="">
      <Head>
        <title>DHL Clone</title>
        <link rel="icon" href="/dhl-logo.jpg" />
      </Head>

      <Navbar />
      <TrackShipmentBanner />
      <ImportServiceUpdates />
      <DocAndParcel />


    </div>

    </>
  )
}

export default Home
