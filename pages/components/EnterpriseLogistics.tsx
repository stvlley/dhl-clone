import Image from 'next/image'
import React from 'react'
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { GiPerson } from 'react-icons/gi';
import { BiPackage } from 'react-icons/bi';
import {FaArrowsAlt } from 'react-icons/fa';
import {MdHouse} from 'react-icons/md';
import {AiOutlinePlus} from 'react-icons/ai';


type Props = {}

const EnterpriseLogistics = (props: Props) => {
    return (
        <div className='w-[75%] mt-10 relative mx-auto h-[700px] items-center flex justify-center'>
            <div className='absolute right-6 z-40 bg-white drop-shadow-lg rounded h-[560px] w-[650px] p-10'>
                <h2 className='text-3xl font-bold tracking-tighter my-4'>Enterprise Logistics Service</h2>
                <h3 className='text-2xl font-thin my-4  '>Business Only</h3>
                <div className="w-[15%] border-b-2 border-black my-4"></div>
                <div className='my-4 text-lg font-extralight'>
                    <p>Find out how DHL Supply Chain revolutionize your business as a 3PL provider.</p>
                  
                </div>
                <div className='bg-gray-100 my-6 h-[170px] w-full left-0  absolute '>
                    <div>
                        <h4 className='ml-6 my-4 font-bold'>Services Available</h4>
                        <div className='ml-5 grid grid-cols-3'>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <HiOutlineOfficeBuilding />
                                </div>
                                <p>Warehousing</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <BiPackage />
                                </div>
                                <p>Packaging</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <MdHouse />
                                </div>
                                <p>Real Estate</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <FaArrowsAlt />
                                </div>
                                <p>Transport</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <GiPerson />
                                </div>
                                <p>Service Logistics</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='bg-[#FFCC00] p-2 m-2 rounded'>
                                    <AiOutlinePlus />
                                </div>
                                <p>And more!</p>
                            </div>


                        </div>
                    </div>

                    <button className='mt-8 ml-8 w-[90%] bg-[#D40511] text-white tracking-wider rounded text-lg p-4'>Explore DHL Supply Chain</button>

                </div>
            </div>
            <div className="bg-cover absolute left-0 w-[50%] h-[600px]  bg-[url('https://www.dhl.com/content/experience-fragments/dhl/en/core/sub_page_teaser/image_left_3_greycolumns/xbu_master_spt_dhl_home_enterprise_logistics_services/_jcr_content/root/container_copy_copy_/container_copy/image.coreimg.80.1197.jpeg/1653309259090/employees-working-in-warehouse-0005.jpeg')]">
            </div>
        </div>
    )
}

export default EnterpriseLogistics