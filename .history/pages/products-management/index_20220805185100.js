import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SearchForm from '../../components/SearchForm.js/SearchForm'
import Head from 'next/head'
import ProductList from '../../components/list/ProductList'
import { useDispatch } from 'react-redux'
import { productsSliceActions } from '../../store/productsSlice'


function ProductsManagement() {

    const [searchInput, setSearchInput] = useState('')

    const router = useRouter()
    const dispatch = useDispatch()

    const searchInputHandle = (value) => {
        setSearchInput(value)
    }

    const searchHandle = async () => {
        try {
            const response = await fetch('https://scm-tool.thanhpp.ninja/item')

            if (!response) {
                throw new Error('somethign wrong');
                return;
            }
            const data = await response.json()

            const dataSearched = data.data.filter((item) => {
                if (item.name.includes(searchInput) || item.desc.includes(searchInput) || item.sku.includes(searchInput) || item.item_type_id.toString().includes(searchInput)) {
                    return true
                }
                return false
            })
            if (searchInput) {
                dispatch(productsSliceActions.isSearching({
                    data: true
                }))
            } else {
                dispatch(productsSliceActions.isSearching({
                    data: false
                }))
            }
            dispatch(productsSliceActions.productSearch({
                data: dataSearched
            }))
            console.log(dataSearched)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <Head>
                <title>products-management</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='text-white '>
                <div className='text-[32px] mb-[16px]'>Products</div>
                <div className='mb-[40px]'>
                    <SearchForm onChangeInput={searchInputHandle} onClickSearch={searchHandle} />
                </div>
                <div className='mb-[24px]'>
                    <button onClick={() => router.push('/products-management/add-product')} className='text-[15px] mb-3 block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add product</button>
                    <button onClick={() => router.push('/products-management/item-types')} className='text-[15px] block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Item types </button>
                </div>
            </div>
            <div>
                <ProductList />
            </div>
            <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                {/* <Save /> */}
            </div>
        </div >
    )
}

export default ProductsManagement