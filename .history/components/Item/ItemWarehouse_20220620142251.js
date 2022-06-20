import React from 'react'
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import Delete from '@mui/icons-material/Delete';


function ItemWarehouse() {


    return (
        <div className=' grid grid-cols-12 gap-3 text-black  border-black border-t'>
            <div className='flex items-center col-span-1 my-[16px]'>
                <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' />
                <div className='mr-[10px] '>|</div>
                <PowerSettingsNew className='text-[#9d8159] cursor-pointer' />
            </div>
            <div className=' col-span-1 my-auto truncate'>sku</div>
            <div className=' col-span-3 my-auto cursor-pointer hover:border-b  '>name</div>
            <div className=' col-span-2 my-auto truncate'>category</div>
            <div className=' col-span-1 my-auto truncate'>$price</div>
            <div className=' col-span-1 my-auto truncate'>amout</div>
            <div className=' col-span-1 my-auto text-[#007EFF] cursor-pointer hover:border-b border-[#007EFF] truncate'>vendor</div>
            <div className=' col-span-2 my-auto pl-[5px] flex justify-between truncate'>
                <span>arrivalDate</span>
                <span className=' border-l border-dotted'></span>
                <span className='bg-[#b18aff] mr-[10px] rounded-sm cursor-pointer'><Delete className=' hover:text-black' /></span>
            </div>
        </div>
    )
}

export default ItemWarehouse