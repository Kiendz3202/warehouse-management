import React from 'react'
import Delete from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemWarehouse from '../Item/ItemWarehouse';
import Pagination from '../Pagination/Pagination';
import WarehouseIcon from '@mui/icons-material/Warehouse';


function warehouseList() {

    const removeHandle = () => {

    }
    return (
        //bg-[#323259]
        <div className='bg-white'>
            <div className='grid grid-cols-12 gap-3 text-black'>
                <div className='flex items-center col-span-1 my-[16px]'>
                    {/* <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' /> */}
                    <WarehouseIcon className='mr-[10px] leading-[24px] ml-[20px]' />
                </div>
                <div className=' col-span-1 my-auto'>SKU</div>
                <div className=' col-span-3 my-auto'>Name</div>
                <div className=' col-span-2 my-auto'>Category</div>
                <div className=' col-span-1 my-auto'>Price</div>
                <div className=' col-span-1 my-auto'>In stock</div>
                <div className=' col-span-1 my-auto'>Vendor</div>
                <div className=' col-span-1 my-auto'>Arival Date</div>
                <div className='flex justify-end my-auto col-span-1'><span onClick={removeHandle} className='mr-[12px] rounded-sm cursor-pointer hover:opacity-80'><Delete className=' ' /></span></div>
            </div>
            {/* {pagination.currentData ? pagination.currentData.map((item) => <ProductItem isSelectedAll={isSelectedAll} key={item.id} id={item.id} sku={item.sku} name={item.name} category={item.category} price={item.price} amount={item.amount} vendor={item.vendor} arrivalDate={item.arrivalDate} />) : <Box sx={{ display: 'flex' }}> */}
            <ItemWarehouse />
            {/* <CircularProgress /> */}
            {/* </Box>} */}
            {/* <Pagination getNumberPerPage={numberPerPageHandle} pageCount={pagination.pageCount} onPageChange={handleClick} /> */}
        </div>
    )
}

export default warehouseList