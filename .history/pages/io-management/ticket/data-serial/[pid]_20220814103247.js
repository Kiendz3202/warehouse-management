import React, { useEffect, useState } from 'react'
import Loading from '../../../../components/UI/Loading'
import Link from 'next/link'
import { useRouter } from 'next/router'



function GetDatasSerialPage() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const { pid } = router.query

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        const fetchData = async () => {
            let token = localStorage.getItem('token')
            setLoading(true)
            try {
                const res = await fetch(`https://scm-tool.thanhpp.ninja/import_ticket/${pid}/serials`, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        'Content-type': 'application/json'
                    }
                })

                if (!res.ok) {
                    throw new Error('can not fetch data')
                    return;
                }

                const data = await res.json()

                setData(data.data)
                console.log(data.data)

                setLoading(false)
            } catch (err) {
                alert(err)
                setLoading(false)
            }
        }

        fetchData()

    }, [router.isReady])

    return (
        <div>
            {/* {data && <table className=' w-full border-collapse border border-black'>
                <tbody>
                    <tr>
                        <th className='border border-black'>Import ticket Id</th>
                        <td className='border border-black'>{'import ticket id: ' + data.import_ticket_id}</td>
                    </tr>
                    <tr>
                        <th className='border border-black' rowSpan='2'>Item</th>
                        <td className='border border-black'>{'name: ' + data.item.name}</td>
                    </tr>
                    <tr>
                        <td className='border border-black'>{'description: ' + data.item.desc}</td>
                    </tr>
                    <tr>
                        <th className='border border-black' rowSpan='4'>Nft information</th>
                        <td className='border border-black'>{'token id: ' + data.nft_info.token_id}</td>
                    </tr>
                    <tr>
                        <td className='border border-black'>{'seri: ' + data.nft_info.seri}</td>
                    </tr>
                    <tr>
                        <td className='border border-black'>{'tx hash: ' + data.nft_info.tx_hash}</td>
                    </tr>
                    <tr>
                        <td className='border border-black'>{'ipfs cid: ' + data.nft_info.ipfs_cid}</td>
                    </tr>
                    <tr>
                        <th className='border border-black'>Seri</th>
                        <td className='border border-black'>{'seri: ' + data.seri}</td>
                    </tr>
                    <tr>
                        <th className='border border-black' rowSpan='2'>Storage</th>
                        <td className='border border-black'>{'name: ' + data.storage.name}</td>
                    </tr>
                    <tr>
                        <td className='border border-black'>{'location: ' + data.storage.location}</td>
                    </tr>
                    <tr>
                        <th className='border border-black'>Supplier</th>
                        <td className='border border-black'>{'name: ' + data.supplier.name}</td>
                    </tr>
                </tbody>
            </table>} */}
        </div>
    )
}

export default GetDatasSerialPage