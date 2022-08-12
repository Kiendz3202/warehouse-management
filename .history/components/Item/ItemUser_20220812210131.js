import React, { useState } from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import Delete from '@mui/icons-material/Delete';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../UI/Modal';
import Loading from '../UI/Loading';
import { useRouter } from 'next/router';

function ItemUser({ id, name, username }) {
    // const [nameUpdate, setNameUpdate] = useState(name)
    // const [descUpdate, setDescUpdate] = useState(desc)
    // const [locationUpdate, setLocationUpdate] = useState(location)
    // const [loading, setLoading] = useState(false)

    // const router = useRouter()

    // const [showModal, setShowModal] = useState(false)

    // const nameHandle = (e) => {
    //     setNameUpdate(e.target.value)
    // }

    // const descHandle = (e) => {
    //     setDescUpdate(e.target.value)
    // }

    // const locationHandle = (e) => {
    //     setLocationUpdate(e.target.value)
    // }

    // const updateHandle = async () => {
    //     setLoading(true)

    //     try {
    //         const res = await fetch(` https://scm-tool.thanhpp.ninja/storage/${id}`, {
    //             method: 'PUT',
    //             body: JSON.stringify({
    //                 name: nameUpdate,
    //                 desc: descUpdate,
    //                 location: locationUpdate
    //             }),
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         })

    //         if (!res) {
    //             throw new Error('edit failed')
    //             return;
    //         }

    //         const data = await res.json()
    //         if (data.error.code == 200) {
    //             console.log('edit success')
    //             router.reload(window.location.pathname)
    //         }
    //         setLoading(false)
    //     } catch (err) {
    //         console.log('edit fail')
    //         setLoading(false)
    //     }
    // }

    return (
        <div className=' grid grid-cols-12 gap-3 text-black  border-black border-t'>
            <div className='flex items-center col-span-1 my-[16px]'>
                {/* <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' /> */}
                <span className='mr-[10px] leading-[24px] ml-[20px]' >{id}</span>
            </div>
            {/* <Link href={`/warehouse-management/${id}`}><div className=' col-span-3 my-auto hover:border-b border-black cursor-pointer  truncate'>{name}</div></Link> */}
            <div className=' col-span-3 my-auto '>{name}</div>
            <div className=' col-span-5 my-auto truncate'>{username}</div>
            {/* <div className=' col-span-2 my-auto truncate'>{location}</div>
            <div className=' col-span-1 my-auto pl-[5px] flex justify-between truncate'>
                <span className=' mr-[10px] rounded-sm cursor-pointer hover:opacity-80'><Delete className='' /></span>
                <span onClick={() => setShowModal(true)} className=' mr-[10px] rounded-sm cursor-pointer hover:opacity-80'><EditIcon className='' /></span>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='name'>Name<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='name' onChange={nameHandle} type='text' value={nameUpdate} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='description'>Description<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='description' onChange={descHandle} value={descUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='location'>Location<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='location' onChange={locationHandle} type='text' value={locationUpdate} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                </div>
                <div className='flex '>
                    <div onClick={updateHandle} className='h-[38px] text-center hover:opacity-80 rounded-md ml-[200px] px-[12px] py-[6px]  border border-white bg-blue-500 cursor-pointer'>
                        <button className='text-black ' >Update warehouse</button>
                    </div>
                </div>
                {loading && <Loading />}
            </Modal> */}
        </div>
    )
}

export default ItemUser