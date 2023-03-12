import React from 'react';
import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';


const RetailVolume = () => (
    <div className='bg-gray-100 '>
        <div className='w-[75%] relative mx-auto h-[500px] items-center flex justify-center'>
            <div className='bg-[url(https://www.dhl.com/content/experience-fragments/dhl/en/core/full_width_teaser/image_left_with_teasers/xbu_master_fwt_dhl_home_retailer_or_volume_shipping/_jcr_content/root/container_copy/container_2120915718/container/image.coreimg.80.588.jpeg/1649931190220/woman-packs-packages-0001.jpeg)] w-[50%] h-[100%] bg-cover'>
            </div>
            <div className='ml-16 h-full w-[50%] p-4'>
                <h2 className='text-3xl font-bold tracking-tight my-2'>Retailer or Volume Shipping</h2>
                <h3 className='text-2xl font-thin my-4  '>Business Only</h3>
                <div className="w-[15%] border-b-2 border-black my-4"></div>
                <div className='my-4 text-lg font-extralight'>
                    <p>We have two divisions that offer business shipping for e-</p>
                    <p>commerce, supplier or manufacturing companies.</p>
                </div>
                <div className='shadow-md rounded bg-white w-100 h-[120px] flex gap-2 items-center justify-center'>
                    <Image src='https://www.dhl.com/content/experience-fragments/dhl/en/core/full_width_teaser/image_left_with_teasers/xbu_master_fwt_dhl_home_retailer_or_volume_shipping/_jcr_content/root/container_copy/container_2120915718/container_copy/container/teaser.coreimg.svg/1675348600429/intransit-rgb-red.svg' width={40} height={40} alt='icon'
                        className='w-[10%] ml-6 mb-6 mx-2' />
                    <div className='w-[90%] text-xs border-l-2 px-2'>
                        <h2 className='hover:text-[#D40511] text-lg font-bold mb-2'>DHL eCommerce Solutions</h2>
                        <p>Connecting businesses to consumers with standard</p><p>domestic and international residential delivery and returns solutions</p>

                    </div>
                    <AiOutlineRight className=' text-[#D40511] text-2xl mr-3 w-[10%]' />
                </div>

                <div className=' mt-5 shadow-md rounded bg-white w-100 h-[120px] flex gap-2 items-center justify-center'>
                    <Image src='https://www.dhl.com/content/experience-fragments/dhl/en/core/full_width_teaser/image_left_with_teasers/xbu_master_fwt_dhl_home_retailer_or_volume_shipping/_jcr_content/root/container_copy/container_2120915718/container_copy/container/teaser_copy_854762095.coreimg.svg/1649931102949/plane-take-off-rgb-red.svg' width={40} height={40} alt='icon'
                        className='w-[10%] ml-6 mb-6 mx-2' />
                    <div className='w-[90%] text-xs border-l-2 px-2'>
                        <h2 className='hover:text-[#D40511] text-lg font-bold mb-2'>DHL Express</h2>
                        <p>Fast, door-to-door, courier delivered. Time definite delivery to</p><p>200+ countries</p>

                    </div>
                    <AiOutlineRight className=' text-[#D40511] text-2xl w-[10%]' />
                </div>

            </div>
        </div>

    </div>
)

export default RetailVolume