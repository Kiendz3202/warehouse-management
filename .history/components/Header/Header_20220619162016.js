import React from 'react'
import { Avatar } from '@mui/material'

function Header() {
    return (
        <div className=' flex justify-between px-[30px] pt-[30px] text-[20px]'>
            <div><span className=' cursor-pointer hover:opacity-80'>Trang chủ</span></div>
            <div><span className=' cursor-pointer hover:opacity-80'>Quản lý kho</span></div>
            <div><span className=' cursor-pointer hover:opacity-80'>Quản lý nhập xuất</span></div>
            <div><span className=' cursor-pointer hover:opacity-80'>Quản lý giao vận</span></div>
            <div><Avatar /></div>
        </div>
    )
}

export default Header