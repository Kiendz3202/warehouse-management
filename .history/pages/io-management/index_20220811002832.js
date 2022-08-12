import React, { useEffect, useState } from 'react'
import SearchForm from '../../components/SearchForm.js/SearchForm'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SupplierList from '../../components/list/SupplierList'
import { supplierSliceActions } from '../../store/supplierSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

function IoManagement() {

    const [searchInput, setSearchInput] = useState('')

    const router = useRouter()
    const dispatch = useDispatch()

    const authSelector = useSelector((state) => state.auth.auth)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/login')
            return;
        }
        console.log(authSelector)
    }, [])

    const searchInputHandle = (value) => {
        setSearchInput(value)
    }

    const searchHandle = async () => {
        try {
            const response = await fetch('https://scm-tool.thanhpp.ninja/supplier')

            if (!response) {
                throw new Error('somethign wrong');
                return;
            }
            const data = await response.json()

            const dataSearched = data.data.filter((supplier) => {
                if (supplier.name.includes(searchInput) || supplier.email.includes(searchInput) || supplier.phone.toString().includes(searchInput)) {
                    return true
                }
                return false
            })
            if (searchInput) {
                dispatch(supplierSliceActions.isSearching({
                    data: true
                }))
            } else {
                dispatch(supplierSliceActions.isSearching({
                    data: false
                }))
            }
            dispatch(supplierSliceActions.supplierSearch({
                data: dataSearched
            }))
            console.log(dataSearched)
        } catch (err) {
            console.log(err)
        }
    }

    return (!authSelector ? <div></div> :
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <Head>
                <title>in-out-management</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='text-white '>
                <div className='text-[32px] mb-[16px]'>Suppliers</div>
                <div className='mb-[40px]'>
                    <SearchForm onChangeInput={searchInputHandle} onClickSearch={searchHandle} />
                </div>
                <div className='mb-[24px]'>
                    <button onClick={() => router.push('/io-management/addSupplier')} className='text-[15px] mb-3 block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add Supplier</button>
                    <button onClick={() => router.push('/io-management/ticket')} className='text-[15px] block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Tickets</button>
                </div>
            </div>
            <div>
                <SupplierList />
            </div>
            {/* <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                <Save />
            </div> */}
        </div>
    )
}

export default IoManagement