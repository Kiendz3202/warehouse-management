import React from 'react'
import SearchForm from '../../../components/SearchForm.js/SearchForm'
import WarehouseProductList from '../../../components/list/WarehouseProductList'
import { useRouter } from 'next/router'


function WareHouse() {

    const router = useRouter()
    const { warehouseName } = router.query
    console.log(warehouseName)

    return (
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <div className='text-white '>
                <div className='text-[32px] mb-[16px]'>Products</div>
                <div className='mb-[40px]'>
                    <SearchForm />
                </div>
                <div className='mb-[24px]'>
                    <button onClick={() => router.push('/warehouse-management/hanoi-soc/add-product')} className='text-[15px] block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add product</button>
                </div>
            </div>
            <div>
                <WarehouseProductList />
            </div>
            <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                {/* <Save /> */}
            </div>
        </div>
    )
}

export default WareHouse