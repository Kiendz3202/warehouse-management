import React from 'react'
import { Avatar } from '@mui/material'

function Header() {
    return (
        <div className=' flex justify-between px-[30px] pt-[30px]'>
            <div><span>Trang chủ</span></div>
            <div><span>Quản lý kho</span></div>
            <div><span>Quản lý nhập xuất</span></div>
            <div><span>Quản lý giao vận</span></div>
            <div><Avatar /></div>
        </div>
    )
}

export default Header