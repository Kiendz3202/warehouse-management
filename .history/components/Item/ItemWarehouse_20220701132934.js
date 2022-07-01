import React, { useState } from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import Delete from '@mui/icons-material/Delete';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '../UI/Modal';

function ItemWarehouse({ name, desc, location }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className=' grid grid-cols-12 gap-3 text-black  border-black border-t'>
            <div className='flex items-center col-span-1 my-[16px]'>
                {/* <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' /> */}
                <WarehouseIcon className='mr-[10px] leading-[24px] ml-[20px]' />
            </div>
            <Link href='/warehouse-management/hanoi-soc'><div className=' col-span-3 my-auto hover:border-b border-black cursor-pointer  truncate'>{ }name</div></Link>
            <div className=' col-span-5 my-auto truncate'>{desc}</div>
            <div className=' col-span-2 my-auto truncate'>{location}</div>
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
                        <input id='name' type='text' value='Kho Ha Noi Soc' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='description'>Description<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='description' value='Kho HN SOC ở đâu chính là kho hàng của Shopee Express ở Long Biên Hà Nội. Khi bạn đặt hàng trên Shopee mà shop ở Hà Nội hoặc bạn ở Hà Nội và được đơn vị vận chuyển là Shopee Express nhận đơn thì chắc chắn đơn hàng đều sẽ qua kho HN SOC' type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='location'>Location<span className='text-[#d13143]'>*</span></label>
                        </div>
                        <input id='location' type='text' value='Ha Noi' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ItemWarehouse