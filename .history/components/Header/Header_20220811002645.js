import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { authSliceActions } from '../../store/authSlice';
import { useRouter } from 'next/router';


function Header() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)

    const displayHandle = () => {
        setDisplay(prev => !prev)
    }
    const logoutHandle = () => {
        dispatch(authSliceActions.setAuth({
            data: false
        }))
        localStorage.removeItem('token')
        router.push('/login')
    }
    return (
        <div className=' flex justify-between px-[30px] py-[30px] text-[20px] border-b border-white'>
            <div><Link href='/'><span className=' cursor-pointer hover:opacity-80'>Trang chủ</span></Link></div>
            <div><Link href='/warehouse-management'><span className=' cursor-pointer hover:opacity-80'>Quản lý kho</span></Link></div>
            <div><Link href='/products-management'><span className=' cursor-pointer hover:opacity-80'>Quản lý sản phẩm</span></Link></div>
            <div><Link href='/io-management'><span className=' cursor-pointer hover:opacity-80'>Quản lý nhập xuất</span></Link></div>
            {/* <div><span className=' cursor-pointer hover:opacity-80'>Quản lý giao vận</span></div> */}
            <div onClick={displayHandle} className=' relative'><span className='cursor-pointer'><Avatar /></span>
                {display ? <div className=' absolute b-[0px] w-[100px]'>
                    <div className='cursor-pointer mb-2'>name</div>
                    <div onClick={logoutHandle} className='cursor-pointer'>Log out</div>
                </div> : ''}
            </div>
        </div>
    )
}

export default Header