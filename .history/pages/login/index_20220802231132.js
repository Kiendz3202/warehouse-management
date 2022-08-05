import React from 'react'
import Login from '../../components/Auth/Login'


function LoginPage() {
    return (
        <div>
            <Login />
            <div className='max-w-[250px] w-full mx-auto mt-[30px] '>
                <div className=' text-center  p-[20px] mb-3 cursor-pointer '>Dành cho khách hàng</div>
                <div className=' text-center  p-[20px] shadow-shadowCustom font-semibold cursor-pointer '>Quét mã sản phẩm</div>
                <div className='text-center  p-[10px] shadow-shadowCustom font-semibold'><input type="text" /></div>
            </div>
        </div>
    )
}

export default LoginPage