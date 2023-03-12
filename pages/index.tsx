import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/Navbar'
import TrackShipmentBanner from './components/TrackShipmentBanner'
import ImportServiceUpdates from './components/ImportServiceUpdates'
import DocAndParcel from './components/DocAndParcel'
import RetailVolume from './components/RetailVolume'
import CargoShipping from './components/CargoShipping'
import EnterpriseLogistics from './components/EnterpriseLogistics'

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
      <RetailVolume />
      <CargoShipping />
      <EnterpriseLogistics />


    </div>

    </>
  )
}

export default Home
