import Image from 'next/image'
import React from 'react'
import { FaPlaneDeparture } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaHandHoldingMedical } from 'react-icons/fa';


type Props = {}

const DocAndParcel = (props: Props) => {
    return (
        <div className='w-[75%] relative mx-auto h-[700px] items-center flex justify-center'>
            <div className='absolute -left-10 z-40 bg-white drop-shadow-lg rounded h-[650px] w-[600px] p-10'>
                <h2 className='text-4xl font-bold tracking-tighter my-4'>Document and Parcel Shipping</h2>
                <h3 className='text-3xl font-thin my-4  '>For All Shippers</h3>
                <div className="w-[15%] border-b-2 border-black my-4"></div>
                <div className='my-8 text-lg font-extralight'>
                    <p>Learn about DHl Express- the undisputed leader in international</p>
                    <p>express shipping.</p>
                </div>
                <div className='bg-gray-100 my-6 h-48 w-full left-0  absolute '>
                    <div>
                        <h4 className='ml-10 my-6 font-bold'>Services Available</h4>
                        <div className='ml-10 grid grid-cols-2'>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <FaPlaneDeparture />
                                </div>
                                <p>Next Possible Business</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <RiBuilding2Fill />
                                </div>
                                <p>Tailored Business Solutions</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <AiFillHome />
                                </div>
                                <p>Flexible import/ export options</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <FaHandHoldingMedical />
                                </div>
                                <p>Wide Variety of Optional Services</p>
                            </div>


                        </div>
                    </div>

                    <button className='mt-16 m-4 items-center w-[95%] bg-[#D40511] text-white tracking-wider rounded text-xl p-4'>Explore DHL Express</button>

                </div>
            </div>
            <div className="bg-cover absolute right-0 w-[60%] h-[700px]  bg-[url('https://www.dhl.com/content/experience-fragments/dhl/en/core/sub_page_teaser/image_right_2_greycolumns/xbu_master_spt_dhl_home_document_and_package_shipping/_jcr_content/root/container_copy_copy/container_copy/image.coreimg.80.1197.jpeg/1655483113358/woman-signs-for-package-0002.jpeg')]">
            </div>
        </div>
    )
}

export default DocAndParcel