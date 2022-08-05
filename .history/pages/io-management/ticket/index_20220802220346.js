import { useRouter } from 'next/router'
import React from 'react'
import SearchForm from '../../../components/SearchForm.js/SearchForm'
import Head from 'next/head'
import TicketList from '../../../components/list/TicketList'

function TicketManagement() {

    const router = useRouter()
    const { typeId } = router.query
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
                    <SearchForm />
                </div>
                <div className='mb-[24px]'>
                    <button onClick={() => router.push(`/io-management/ticket/addTicket`)} className='text-[15px] mb-3 block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>Add new ticket</button>
                    <button onClick={() => router.push(`/io-management/ticket/general_serial`)} className='text-[15px] mb-3 block bg-transparent hover:opacity-80 border border-white cursor-pointer rounded-md min-w-[110px] h-[34px] px-[12px] py-[6px]'>General serials</button>
                </div>
            </div>
            <div>
                <TicketList />
            </div>
            <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                {/* <Save /> */}
            </div>
        </div>
    )
}

export default TicketManagement