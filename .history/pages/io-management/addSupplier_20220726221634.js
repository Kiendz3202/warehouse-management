import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import Loading from '../../components/UI/Loading';

function AddSupplier() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()


    const nameHandle = (e) => {
        setName(e.target.value)
    }

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }

    const phoneHandle = (e) => {
        setPhone(e.target.value)
    }



    const addSupplierHandle = async () => {
        setLoading(true)

        try {
            const res = await fetch('https://scm-tool.thanhpp.ninja/supplier', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    phone
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if (!res.ok) {
                throw new Error('something wrong');
                return;
            }

            const data = await res.json()
            if (data.error.code == 200) {
                router.push('/io-management')
            }
            setLoading(false)
            console.log(data)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    return (
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <div>
                <div onClick={() => router.back()} className=' bg-white rounded-[1000px] w-[30px] h-[30px] mb-[10px] cursor-pointer'>
                    <ArrowBackIcon className='text-black pl-[4px]' />
                </div>
                <div className=' text-[28px]'>
                    Add new supplier
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
                            <label htmlFor='name'>Name<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='name' type='text' onChange={nameHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='email'>Email<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='email' type='text' onChange={emailHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='phone'>Phone<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='phone' type='text' onChange={phoneHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div onClick={addSupplierHandle} className='h-[38px] text-center hover:opacity-80 rounded-md ml-[200px] px-[12px] py-[6px] bg-transparent border border-white cursor-pointer'>
                            <button className='text-white ' >Add new supplier</button>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? <Loading /> : ''}
        </div>
    )
}

export default AddSupplier