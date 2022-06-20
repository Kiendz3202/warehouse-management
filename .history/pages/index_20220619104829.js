import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginIcon from '@mui/icons-material/Login';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=' max-w-[410px] w-full m-auto border-2 mt-[200px]'>
        <form className='flex flex-col w-[380px] p-[15px] bg-[#f3f3f3] drop-shadow-md'>
          <p className=' text-center text-[#212509] text-[28px] my-[18px]'>Login</p>
          <div className=' justify-center mb-[5px] '>
            <input type="email" className='w-full p-[10px] border border-gray-600 outline-blue-300' placeholder='Email' />
            {/* {isValidated.email ?? <p>{isValidated.email}</p>} */}
          </div>
          <div className=' justify-center mb-[10px] '>
            <input type="password" className='w-full p-[10px] border border-gray-600 outline-blue-300' placeholder='Password' />
            {/* {isValidated.password ?? <p>{isValidated.password}</p>} */}
          </div>
          <button className=' bg-[#70c282] h-[30px] rounded text-white font-medium'>
            <LoginIcon />
            Login
          </button>
          {/* {errorMessage ?? <p>email or password is wrong!</p>} */}
          <p className=' ml-auto mt-3 cursor-pointer hover:opacity-80'>Quên mật khẩu</p>
        </form>
      </div>
      <div className='max-w-[250px] w-full mx-auto mt-[30px] '>
        <div>
          <div className=' text-center  p-[20px] mb-3 cursor-pointer hover:opacity-50'>Dành cho khách hàng</div>
          <div className=' text-center  p-[20px] shadow-shadowCustom font-semibold'>Quét mã sản phẩm</div>
        </div>
      </div>
    </div>
  )
}