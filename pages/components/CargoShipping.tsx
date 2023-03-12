import Image from 'next/image'
import React from 'react'
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaTruckMoving } from 'react-icons/fa';
import { GiCargoShip } from 'react-icons/gi';
import {TbTrain } from 'react-icons/tb';


type Props = {}

const CargoShipping = (props: Props) => {
    return (
        <div className='w-[75%] mt-10 relative mx-auto h-[700px] items-center flex justify-center'>
            <div className='absolute left-28 z-40 bg-white drop-shadow-lg rounded h-[560px] w-[550px] p-10'>
                <h2 className='text-3xl font-bold tracking-tighter my-4'>Cargo Shipping</h2>
                <h3 className='text-2xl font-thin my-4  '>Business Only</h3>
                <div className="w-[15%] border-b-2 border-black my-4"></div>
                <div className='my-4 text-lg font-extralight'>
                    <p>Discover shipping and logistics service options from DHL Global Forwarding.</p>
                  
                </div>
                <div className='bg-gray-100 my-6 h-[170px] w-full left-0  absolute '>
                    <div>
                        <h4 className='ml-6 my-4 font-bold'>Services Available</h4>
                        <div className='ml-5 grid grid-cols-2'>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <FaPlaneDeparture />
                                </div>
                                <p>Air Freight</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <GiCargoShip />
                                </div>
                                <p>Ocean Freight</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <FaTruckMoving />
                                </div>
                                <p>Road Freight</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <TbTrain />
                                </div>
                                <p>Rail Freight</p>
                            </div>


                        </div>
                    </div>

                    <button className='mt-8 ml-8 w-[90%] bg-[#D40511] text-white tracking-wider rounded text-lg p-4'>Explore DHL Global Forwarding</button>

                </div>
            </div>
            <div className="bg-cover absolute right-0 w-[50%] h-[600px]  bg-[url('https://www.dhl.com/content/experience-fragments/dhl/en/core/sub_page_teaser/image_right_2_greycolumns/xbu_master_spt_dhl_home_pallets_containers_and_cargo/_jcr_content/root/container_copy_copy/container_copy/image.coreimg.80.1197.jpeg/1649767082094/workers-at-the-container-port-0001.jpeg')]">
            </div>
        </div>
    )
}

export default CargoShipping