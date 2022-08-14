import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { authSliceActions } from '../../store/authSlice';
import { useRouter } from 'next/router';


function Header() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(false)
    const [username, setUsername] = useState()


    useEffect(() => {
        const name = localStorage.getItem('username')
        setUsername(name)
    }, [])

    const displayHandle = () => {
        setDisplay(prev => !prev)
    }
    const logoutHandle = () => {
        dispatch(authSliceActions.setAuth({
            data: false
        }))
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        router.push('/login')
    }
    return (
        <div className=' flex justify-between px-[30px] py-[30px] text-[20px] border-b border-white'>
            <div><Link href='/'><span className=' cursor-pointer hover:opacity-80'>Home page</span></Link></div>
            <div><Link href='/warehouse-management'><span className=' cursor-pointer hover:opacity-80'>Warehouses</span></Link></div>
            <div><Link href='/products-management'><span className=' cursor-pointer hover:opacity-80'>Products</span></Link></div>
            <div><Link href='/io-management'><span className=' cursor-pointer hover:opacity-80'>io management</span></Link></div>
            {/* <div><span className=' cursor-pointer hover:opacity-80'>Quản lý giao vận</span></div> */}
            <div onClick={displayHandle} className=' relative'><span className='cursor-pointer'><Avatar /></span>
                {display ? <div className=' absolute b-[0px] w-[100px]'>
                    <div className='cursor-pointer mb-2'>{username}</div>
                    <div onClick={logoutHandle} className='cursor-pointer'>Log out</div>
                </div> : ''}
            </div>
        </div>
    )
}

export default Header