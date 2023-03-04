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
                        <p className='mt-4 text-lg font-bold'>
                            DHL Express Reference Tracking
                        </p>
                        <AiOutlineRight className='mt-4 mx-2 text-2xl' />

                    </div>
                </div>
            </div>
            <div className='shadow grid min-w-[900px] grid-cols-3 -bottom-10 absolute'>
                <div className='flex justify-center items-center flex-col  border rounded-l w-full mt-10 h-[150px] bg-white'>
                    <Image src='https://www.dhl.com/content/dam/dhl/global/core/images/icons/general-icons/glo-core-online.svg'
                        height={40}
                        width={40}
                        alt='icon'
                        className='' />
                    <h2 className='hover:text-[#D40511] my-2 font-bold text-sm'>Ship Now</h2>
                    <p className='tracking-wider text-xs font-extralight'>Find the right service</p>
                </div>
                <div className='flex justify-center items-center flex-col  w-full border mt-10 h-[150px] bg-white'>
                    <Image src=' https://www.dhl.com/content/dam/dhl/global/core/images/icons/general-icons/glo-core-getaquote.svg'
                        height={40}
                        width={40}
                        alt='icon' />
                    <h2 className='hover:text-[#D40511] my-2 font-bold text-sm'>Get a Quote</h2>
                    <p className='tracking-wider font-extralight text-xs'>Estimate cost to share and compare</p>
                </div>
                <div className='relative c-voc-quicklink flex justify-center items-center flex-col  w-full border rounded rounded-t h-[190px] bg-white'>
                    <Image src='https://www.dhl.com/content/dam/dhl/global/core/images/icons/gogreen-icons/glo-core-gogreen-warehousing.svg'
                        height={50}
                        width={50}
                        alt='icon' />
                    <h2 className='hover:text-[#D40511] my-2 font-bold text-sm'>DHL for Business</h2>
                    <p className='text-xs font-extralight tracking-wider'>Shipping regularly? Request a business</p>
                    <p className='text-xs font-extralight tracking-wider'>account and profit from exclusive benefits</p>

                    <div className="-top-1 -right-7 z-0 rotate-45 absolute
                    border-l-[45px] border-l-transparent
                    border-b-[45px] border-b-[#FFCC00]
                    border-r-[45px] border-r-transparent">
                    </div>

                </div>
            </div>

        </div>

    )
}

export default TrackShipmentBanner