import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SearchForm from '../../../components/SearchForm.js/SearchForm'
import Head from 'next/head'
import TicketList from '../../../components/list/TicketList'
import { useDispatch } from 'react-redux'
import { ticketSliceActions } from '../../../store/ticketSlice'

function TicketManagement() {

    const [searchInput, setSearchInput] = useState('')

    const router = useRouter()
    const dispatch = useDispatch()

    const searchInputHandle = (value) => {
        setSearchInput(value)
    }

    const searchHandle = async () => {
        try {
            const response = await fetch('https://scm-tool.thanhpp.ninja/import_ticket')

            if (!response) {
                throw new Error('somethign wrong');
                return;
            }
            const data = await response.json()

            const dataSearched = data.data.filter((ticket) => {
                if (ticket.from_supplier_id?.toString().includes(searchInput) || ticket.to_storage_id?.toString().includes(searchInput) || ticket.fee?.toString().includes(searchInput) || ticket.receive_time?.includes(searchInput) || ticket.send_time?.includes(searchInput)) {
                    return true
                }
                return false
            })
            if (searchInput) {
                dispatch(ticketSliceActions.isSearching({
                    data: true
                }))
            } else {
                dispatch(ticketSliceActions.isSearching({
                    data: false
                }))
            }
            dispatch(ticketSliceActions.ticketSearch({
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
                <title>tickets</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='text-white '>
                <div className='text-[32px] mb-[16px]'>Tickets</div>
                <div className='mb-[40px]'>
                    <SearchForm onChangeInput={searchInputHandle} onClickSearch={searchHandle} />
                </div>
                <div className='mb-[24px]'>
                    <button onClick={() => router.push(`/io-management/ticket/addTicket`)} className='text-[15px] mb-3 block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add new ticket</button>
                    <button onClick={() => router.push(`/io-management/ticket/generalSerials`)} className='text-[15px] mb-3 block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>General serials</button>
                </div>
            </div>
            <div>
                <TicketList />
            </div>
            {/* <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                <Save />
            </div> */}
        </div>
    )
}

export default TicketManagement