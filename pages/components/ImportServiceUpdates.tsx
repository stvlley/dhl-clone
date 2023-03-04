import Image from 'next/image'
import React from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs';
import {AiOutlineRight} from 'react-icons/ai';



const ImportServiceUpdates = () => {
    return (
        <div className='my-36'>
            <div className='w-full h-60 bg-gray-100/50'>
                <div className='w-[70%] h-full mx-auto'>
                    <h1 className='my-6 pt-10 font-extrabold text-xl'>Important Service Updates</h1>
                    <div className='gap-6 grid grid-cols-3'>
                        <div className='shadow-md rounded bg-white w-100 h-[120px] flex gap-3 items-center justify-center'>
                            <Image src='https://www.dhl.com/content/experience-fragments/dhl/en/core/service_updates/service_update_teaser1row/xbu_us_sut_dhl_home_important_service_updates/_jcr_content/root/container/container/teaser_copy_96980216.coreimg.svg/1668182919551/globe-rgb-red.svg' width={40} height={40} alt='icon'
                                className='mb-8' />
                            <div className=' text-xs border-l-2 px-2'>
                                <h2 className='hover:text-[#D40511] text-lg font-bold mb-2'>Ukraine Situation Update</h2>
                                <p>Read more</p>

                            </div>
                            <BsBoxArrowUpRight className=' text-[#D40511]' />
                        </div>
                        <div className='shadow-md rounded bg-white w-100 h-[120px] flex gap-3 items-center justify-center'>
                            <Image src='https://www.dhl.com/content/experience-fragments/dhl/en/core/service_updates/service_update_teaser1row/xbu_us_sut_dhl_home_important_service_updates/_jcr_content/root/container/container/teaser.coreimg.svg/1668182919599/coronavirus-rgb-red.svg' width={40} height={40} alt='icon'
                                className='mb-8' />
                            <div className='text-xs border-l-2 px-2'>
                                <h2 className='hover:text-[#D40511] text-lg font-bold mb-2'>COVID-19 Update</h2>
                                <p className='my-1'>Our corporate respose, operational</p>
                                <p>updates and FAQ's about the pandemic</p>
                            </div>
                            <BsBoxArrowUpRight className='text-[#D40511]' />
                        </div>
                        <div className='shadow-md rounded bg-white w-100 h-[120px] flex gap-3 items-center justify-center'>
                            <Image src='https://www.dhl.com/content/experience-fragments/dhl/en/core/service_updates/service_update_teaser1row/xbu_us_sut_dhl_home_important_service_updates/_jcr_content/root/container/container/teaser_copy.coreimg.svg/1668182919664/mobile-phone-rgb-red.svg' width={40} height={40} alt='icon'
                                className='mb-8' />
                            <div className=' text-xs border-l-2 px-2'>
                                <h2 className='hover:text-[#D40511] text-lg font-bold mb-2'>SMS Scam Alert</h2>
                                <p className='my-1'>Look out for malware title "Download</p>
                                <p>our Application to Track Your parcel"</p>
                            </div>
                            <AiOutlineRight className='text-[#D40511]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportServiceUpdates;