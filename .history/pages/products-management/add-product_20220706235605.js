import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import Loading from '../../components/UI/Loading';

function AddProduct() {
    const [sku, setSku] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [itemTypeId, setItemTypeId] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const skuHandle = (e) => {
        setSku(e.target.value)
    }

    const nameHandle = (e) => {
        setName(e.target.value)
    }

    const descHandle = (e) => {
        setDesc(e.target.value)
    }

    const itemTypeIdHandle = (e) => {
        setItemTypeId(e.target.value)
    }

    const imageHandle = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImage(readerEvent.target.result);
            console.log(readerEvent.target.result)
        };

        // setImage(e.target.value)
        console.log(e.target.value)
    }


    const addWarehouseHandle = async () => {
        setLoading(true)
        try {
            const res = await fetch(' https://scm-tool.thanhpp.ninja/item', {
                method: 'POST',
                body: JSON.stringify({
                    sku,
                    name,
                    desc,
                    location,
                    itemTypeId,
                    image
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            if (!res) {
                throw new Error('somethign wrong');
                return;
            }

            const data = await res.json()
            if (data.error.code == 200) {
                router.push('/warehouse-management')
            }
            setLoading(false)
            console.log(data)
        } catch (err) {
            console.log('post wrong')
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
                    Add new product
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
                            <label htmlFor='sku'>Sku<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='sku' type='text' onChange={skuHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='name'>Name<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='name' type='text' onChange={nameHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='description'>Description<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='description' type='text' onChange={descHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='itemTypeId'>Item type id<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='itemTypeId' type='text' onChange={itemTypeIdHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='image'>Image<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='image' type='file' onChange={imageHandle} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div onClick={addWarehouseHandle} className='h-[38px] text-center hover:opacity-80 rounded-md ml-[200px] px-[12px] py-[6px] bg-transparent border border-white cursor-pointer'>
                            <button className='text-white ' >Add new product</button>
                        </div>
                    </div>
                </div>
            </div>
            {loading ? <Loading /> : ''}
        </div>
    )
}

export default AddProduct