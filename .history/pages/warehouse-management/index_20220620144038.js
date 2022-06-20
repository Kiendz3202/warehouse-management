import React from 'react'
import SearchForm from '../../components/SearchForm.js/SearchForm'
import WarehouseList from '../../components/list/WarehouseList'

function warehouseManagement() {
    return (
        //bg-[#1b1b38]
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <div className='text-white '>
                <div className='text-[32px] mb-[16px]'>Products</div>
                <div className='mb-[40px]'>
                    <SearchForm />
                </div>
                <div className='mb-[24px]'>
                    <button className='text-[15px] block bg-transparent border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add Products</button>
                </div>
            </div>
            <div>
                <WarehouseList />
            </div>
            <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                {/* <Save /> */}
            </div>
        </div>
    )
}

export default warehouseManagement