import Image from "next/image";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

// todo=> make yellow navbar fixed to top when scrolling
// todo=> add feedback top to side and backtop top arrow (fixed to position)


const Navbar = () => {
    return (


        <div className="">
            <div className="justify-center mx-6 flex">
                {/* TOP SECTION */}
                <div className=' my-4'>
                    <div className=' md:flex  gap-10'>
                        <div className='flex items-center'>

                            {/* flag */}
                            <Image
                                className='rounded-full'
                                src='/flag.jpeg' width={50} height={50} alt='flag' />
                            <div className='px-6'>
                                You are in
                                {' '}
                                <span className='pl-4 font-extrabold'>United States of America</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='tracking-wider bg-[#D40511] text-white px-4 py-2 rounded'>Stay on this site</div>
                            <span className='p-4'>or</span>
                            <div className='font-bold tracking-wide border px-4 py-2  rounded border-[#D40511] text-[#D40511]'>Select a different country</div>
                        </div>
                    </div>
                </div>


            </div>
            {/* MIDDLE SECTION */}
            <div className="py-6 bg-gradient-to-r from-[#FFCC00] to-[#FFCC00]/40">
                <div className="flex max-w-[80%] gap-16 mx-auto">
                    <div className="">
                        <Image src='/dhl.svg' width={170} height={170} alt='dhl' />
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex items-center">
                        <span>
                            Find a Location
                        </span>
                        <BsBoxArrowUpRight className="text-sm m-2" />
                    </div>
                    <div className="flex items-center">
                        <AiOutlineSearch className="mx-3" />
                        <span>
                            Search
                        </span>
                    </div>
                    <div className="flex items-center">
                        <BsGlobe className="m-2" />
                        <span>
                            United States of America
                        </span>
                    </div>
                </div>
            </div>


            {/* BOTTOM SECTION */}
            <div className="py-6">
                <div className="text-sm tracking-wider flex max-w-[80%] gap-16 mx-auto">
                    <div className="flex items-center">
                        <span>Track</span>
                        <BsChevronDown className="ml-2 mt-2" />
                    </div>
                    <div className="flex items-center">
                        <span>Ship</span>
                        <BsChevronDown className="ml-2 mt-2" />
                    </div>
                    <div className="flex items-center">
                        <span>Enterprise Logistics Service</span>
                        <BsChevronDown className="ml-2 mt-2" />
                    </div>
                    <div className="flex items-center">
                        <span>Customer Service</span>
                        <BsChevronDown className="ml-2 mt-2" />
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex items-center">
                        <span>
                            Custom Portal Logins
                        </span>
                        <BsChevronDown className="ml-2 mt-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;