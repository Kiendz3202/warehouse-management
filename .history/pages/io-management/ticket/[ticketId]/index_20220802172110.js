import { useRouter } from 'next/router'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loading from '../../../../components/UI/Loading';

function TicketId() {
    const [supplierIdUpdate, setSupplierIdUpdate] = useState(supplierId)
    const [storageIdUpdate, setStorageIdUpdate] = useState(storageId)
    const [statusUpdate, setStatusUpdate] = useState(status)
    const [feeUpdate, setFeeUpdate] = useState(fee)
    const [billImageUpdate, setBillImageUpdate] = useState(billImage)
    const [productImageUpdate, setProductImageUpdate] = useState(productImage)
    const [receiveTimeUpdate, setReceiveTimeUpdate] = useState(receiveTime)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const { ticketId } = router.query


    const fetchTicket = async () => {
        setLoading(true)
        try {
            const res = await fetch(`https://scm-tool.thanhpp.ninja/import_ticket/${ticketId}`)

            if (!res.ok) {
                throw new Error('can not fetch data')
                return;
            }

            const data = await res.json()

            const item = data.data.filter((type) => type.id == ticketId)


            console.log(item)

            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!router.isReady) {
            return;
        }

        fetchTicket()
    }, [router.isReady])


    const idHandle = (e) => {
        setId(e.target.value)
    }

    const nameHandle = (e) => {
        setName(e.target.value)
    }

    const descHandle = (e) => {
        setDesc(e.target.value)
    }

    const updateTypeHandle = async () => {
        setLoading(true)

        try {
            const res = await fetch(` https://scm-tool.thanhpp.ninja/item-type/${ticketId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name,
                    desc
                }),
                // headers: {
                //     "Content-type": "multipart/form-data"
                // }
            })
            if (!res.ok) {
                throw new Error('something wrong');
                return;
            }

            const data = await res.json()
            if (data.error.code == 200) {
                router.push('/products-management')
            }
            setLoading(false)
            console.log(data)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    return (
        <div className='bg-blue-500 w-full h-full min-h-screen   p-[36px]'>
            <div>
                <div onClick={() => router.back()} className=' bg-white rounded-[1000px] w-[30px] h-[30px] mb-[10px] cursor-pointer'>
                    <ArrowBackIcon className='text-black pl-[4px]' />
                </div>
                <div className=' text-[28px]'>
                    {/* {name?.name} */}
                </div>
            </div>
            <div className='relative text-[#A16EFF] border-b border-white'>
                <span className='ml-[10px] cursor-pointer'>Info</span>
                <div className=' absolute w-[50px] h-[3px] bg-[#A16EFF]'></div>
            </div>
            <div className='my-[32px]'>
                <div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='id'>Id</label>
                        </div>
                        <input id='id' type='text' defaultValue={id} readOnly className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='supplierId'>supplier id</label>
                        </div>
                        <input id='supplierId' onChange={supplierIdHandle} type='text' value={supplierIdUpdate} className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px]' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='storageId'>storage id</label>
                        </div>
                        <input id='storageId' onChange={storageIdHandle} value={storageIdUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='status'>status</label>
                        </div>
                        <input id='status' onChange={statusHandle} value={statusUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='fee'>fee</label>
                        </div>
                        <input id='fee' onChange={feeHandle} value={feeUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='billImage'>bill image</label>
                        </div>
                        <input id='billImage' onChange={billImageHandle} value={billImageUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='productImage'>product image</label>
                        </div>
                        <input id='productImage' onChange={productImageHandle} value={productImageUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='receiveTime'>receive time</label>
                        </div>
                        <input id='receiveTime' onChange={receiveTimeHandle} value={receiveTimeUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div>
                    {/* <div className='flex mb-[26px]'>
                        <div className='flex justify-end w-[175px] leading-[38px] mr-[20px]'>
                            <label htmlFor='sendTime'>send time</label>
                        </div>
                        <input id='sendTime' onChange={sendTimeHandle} value={sendTimeUpdate} type='text' className='text-black h-[38px] w-[380px] pl-[15px] pr-[40px] truncate' />
                    </div> */}
                </div>
            </div>
            {loading ? <Loading /> : ''}
        </div>
    )
}

export default TicketId