import React, { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm.js/SearchForm'
import UserList from '../components/list/UserList'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { userSliceActions } from '../store/userSlice'
import { useSelector } from 'react-redux';

export default function Home() {
  // const ISSERVER = typeof window === "undefined";
  // const isBrowser = () => typeof window !== "undefined";
  const [searchInput, setSearchInput] = useState('')
  const [auth, setAuth] = useState()

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/login')
      return;
    }
    const token = localStorage.getItem('token')
    setAuth(token)
  }, [])

  const searchInputHandle = (value) => {
    setSearchInput(value)
  }

  const searchHandle = async () => {
    let token = localStorage.getItem('token')
    try {
      const response = await fetch('https://scm-tool.thanhpp.ninja/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response) {
        throw new Error('somethign wrong');
        return;
      }
      const data = await response.json()

      const dataSearched = data.data.filter((user) => {
        if (user.name.includes(searchInput) || user.username.includes(searchInput)) {
          return true
        }
        return false
      })
      if (searchInput) {
        dispatch(userSliceActions.isSearching({
          data: true
        }))
      } else {
        dispatch(userSliceActions.isSearching({
          data: false
        }))
      }
      dispatch(userSliceActions.userSearch({
        data: dataSearched
      }))
      console.log(dataSearched)
    } catch (err) {
      console.log(err)
    }
  }

  return (!auth ? <div></div> :
    <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>
      <div className='text-white '>
        <div className='text-[32px] mb-[16px]'>Warehouses</div>
        <div className='mb-[40px]'>
          <SearchForm onChangeInput={searchInputHandle} onClickSearch={searchHandle} />
        </div>
        <div className='mb-[24px]'>
          <button onClick={() => router.push('/products-management/add-product')} className='text-[15px] mb-3 block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add product</button>
          <button onClick={() => router.push('/products-management/item-types')} className='text-[15px] block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Item types </button>
        </div>
      </div>
      <div>
        <UserList />
      </div>
      {/* <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                <Save />
            </div> */}
    </div>
  )
}
