import React from 'react'
import SearchForm from '../../components/SearchForm.js/SearchForm'
import WarehouseList from '../../components/list/WarehouseList'
import { useRouter } from 'next/router'
import Head from 'next/head'

function IoManagement() {

    const imageHandle = (e) => {
        console.log(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <Head>
                <title>in-out-management</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='text-white '>
                <div className='text-[32px] mb-[16px]'>Warehouses</div>
                <div className='mb-[40px]'>
                    <SearchForm />
                </div>
                <div className='mb-[24px]'>
                    <button className='text-[15px] block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add warehouse</button>
                </div>
            </div>
            <div>
                {/* <WarehouseList /> */}
                <input onChange={imageHandle} type='file' />
            </div>
            <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                {/* <Save /> */}
            </div>
        </div>
    )
}

export default IoManagement