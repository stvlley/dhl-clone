import Image from 'next/image'
import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';


const TrackShipmentBanner = () => {
    return (

        <div className="justify-center flex relative backdrop-brightness-50 bg-cover bg-center  bg-[url('https://www.dhl.com/content/dam/dhl/global/core/images/marketing-stage-2730x1120/employee-receives-customer-signature-0001.jpg')] h-[500px] w-full">
            <div className="fixed w-full h-full flex  justify-center backdrop-brightness-75">
                <div className='mt-16 w-[700px] text-white'>
                    <h1 className='my-6 text-left text-3xl font-bold'>Track Your Shipment</h1>
                    <div className='flex '>
                        <input placeholder='Enter your tracking number(s)' type="text" className='rounded-l-lg w-full p-5 ' />
                        <button className='text-white bg-[#D40511] px-10 border rounded-r-lg border-white font-bold tracking-wider'>Track</button>
                    </div>
                    <div className='flex items-center'>
                        <p className='mt-4 text-xl'>
                            DHL Express Reference Tracking
                        </p>
                        <AiOutlineRight className='mt-4 mx-2 text-2xl' />

                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 bottom-0 absolute'>
                <div>one</div>
                <div>two</div>
                <div>three</div>
            </div>

        </div>

    )
}

export default TrackShipmentBanner