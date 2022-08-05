import React, { useEffect, useState } from 'react'
import Delete from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/Inbox';
import Pagination from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import ItemTicket from '../Item/ItemTicket';
import ItemType from '../Item/ItemType'


function TicketList() {
    // const productsData = useSelector((state) => state.products.products)
    const [ticket, setTicket] = useState()
    // const [warehouseList, setWarehouseList] = useState(warehouseData)

    const dispatch = useDispatch()


    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const response = await fetch(' https://scm-tool.thanhpp.ninja/import_ticket')
                if (!response) {
                    throw new Error('somethign wrong');
                    return;
                }
                const data = await response.json()

                setTicket(data.data)
                // dispatch(productsSliceActions.saveProducts({
                //     data: data.data
                // }))
                // setWarehouseList(data)
                console.log(data.data)
            } catch (err) {
                console.log('fetch wrong')
            }
        }

        fetchTicket()
    }, [])

    const removeHandle = () => {

    }
    return (
        //bg-[#323259]
        <div className='bg-white rounded-md'>
            <div className='grid grid-cols-12 gap-3 text-black'>
                <div className='flex items-center col-span-1 my-[16px]'>
                    {/* <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' /> */}
                    <span className='mr-[10px] leading-[24px] ml-[20px]' >id</span>
                </div>
                <div className=' col-span-1 my-auto   truncate'>supplier id</div>
                <div className=' col-span-1 my-auto   truncate'>storage id</div>
                <div className=' col-span-6 my-auto truncate'>status</div>
                <div className=' col-span-2 my-auto truncate'>fee</div>
                <div className=' col-span-1 my-auto pl-[5px] flex justify-between truncate'>
                    <span className=' mr-[10px] rounded-sm'>Delete</span>
                    <span className=' mr-[10px] rounded-sm'>Edit</span>
                </div>
            </div>
            {/* {pagination.currentData ? pagination.currentData.map((item) => <ProductItem isSelectedAll={isSelectedAll} key={item.id} id={item.id} sku={item.sku} name={item.name} category={item.category} price={item.price} amount={item.amount} vendor={item.vendor} arrivalDate={item.arrivalDate} />) : <Box sx={{ display: 'flex' }}> */}
            {ticket && ticket.map(ticket => <ItemTicket id={ticket.id} key={ticket.id} supplierId={ticket.from_supplier_id} storageId={ticket.to_storage_id} status={ticket.status} fee={ticket.fee} billImage={ticket.bill_image_paths} productImage={ticket.product_image_paths} />)}
            {/* <CircularProgress /> */}
            {/* </Box>} */}
            {/* <Pagination getNumberPerPage={numberPerPageHandle} pageCount={pagination.pageCount} onPageChange={handleClick} /> */}
            {/* <Pagination /> */}
        </div>
    )
}

export default TicketList