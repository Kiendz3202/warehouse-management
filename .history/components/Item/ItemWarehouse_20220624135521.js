import React, { useState } from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import Delete from '@mui/icons-material/Delete';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';

function ItemWarehouse() {


    return (
        <div className=' grid grid-cols-12 gap-3 text-black  border-black border-t'>
            <div className='flex items-center col-span-1 my-[16px]'>
                {/* <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' /> */}
                <WarehouseIcon className='mr-[10px] leading-[24px] ml-[20px]' />
            </div>
            <Link href='/warehouse-management/hanoi-soc'><div className=' col-span-3 my-auto hover:border-b border-black cursor-pointer  truncate'>Kho Hà Nội Soc</div></Link>
            <div className=' col-span-5 my-auto truncate'>Kho HN SOC ở đâu chính là kho hàng của Shopee Express ở Long Biên Hà Nội. Khi bạn đặt hàng trên Shopee mà shop ở Hà Nội hoặc bạn ở Hà Nội và được đơn vị vận chuyển là Shopee Express nhận đơn thì chắc chắn đơn hàng đều sẽ qua kho HN SOC</div>
            <div className=' col-span-2 my-auto truncate'> Hà Nội</div>
            <div className=' col-span-1 my-auto pl-[5px] flex justify-between truncate'>
                <span className=' mr-[10px] rounded-sm cursor-pointer hover:opacity-80'><Delete className='' /></span>
                <span className=' mr-[10px] rounded-sm cursor-pointer hover:opacity-80'><EditIcon className='' /></span>
            </div>
        </div>
    )
}

export default ItemWarehouse