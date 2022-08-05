import React, { useState } from 'react'
import Login from '../../components/Auth/Login'
import Loading from '../../components/UI/Loading'
import Link from 'next/link'



function SerialPage() {


    const [serial, setSerial] = useState()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const serialHandle = (e) => {
        setSerial(e.target.value)
    }

    const getSerialInforHandle = async () => {
        setLoading(true)

        try {
            const res = await fetch(`https://scm-tool.thanhpp.ninja/serial/${serial}`)

            if (!res.ok) {
                throw new Error('can not fetch data')
                return;
            }

            const data = await res.json()

            const inforData = data.data

            setData(inforData)

            console.log(inforData)

            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }

        setLoading(false)
    }

    return (
        <div>
            <div className='max-w-[250px] w-full mx-auto mt-[30px] mb-[30px] '>
                <div className=' text-center  p-[20px] shadow-shadowCustom font-semibold cursor-pointer '>Quét mã sản phẩm</div>
                <div className='text-center  p-[10px] shadow-shadowCustom font-semibold '><input onChange={serialHandle} className='outline-0' type="text" /></div>
                <div onClick={getSerialInforHandle} className='text-center  p-[10px] shadow-shadowCustom font-semibold cursor-pointer'><button>Get serial information</button></div>
            </div>
            {loading && <Loading />}
            <table className=' w-full'>
                <tr>
                    <th>Import ticket Id</th>
                    <td>{data.import_ticket_id}</td>
                </tr>
                <tr>
                    <th rowSpan='2'>Item</th>
                    <td>{data.item.name}</td>
                </tr>
                <tr>
                    <td>{data.item.desc}</td>
                </tr>
                <tr>
                    <th rowSpan='3'>Nft information</th>
                    <td>{data.nft_info.seri}</td>
                </tr>
                <tr>
                    <td>{data.nft_info.tx_hash}</td>
                </tr>
                <tr>
                    <td>{data.nft_info.ipfs_cid}</td>
                </tr>
            </table>
        </div>
    )
}

export default SerialPage