import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function DetailPage() {
    return (
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <div>
                <div className=' bg-white rounded-[1000px] w-[30px] h-[30px] mb-[10px] cursor-pointer'>
                    <ArrowBackIcon className='text-black pl-[4px]' />
                </div>
                <div className=' text-[28px]'>
                    Cây lau nhà
                </div>
            </div>
            <div className='relative text-[#A16EFF] border-b border-white'>
                <span className='ml-[10px] cursor-pointer'>Info</span>
                <div className=' absolute w-[50px] h-[3px] bg-[#A16EFF]'></div>
            </div>
            <div className='my-[32px]'>
                <div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='vendor'>Vendor <span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='vendor' type='text' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='title'>Product Title <span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='title' type='text' className='bg-[#252547] h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage