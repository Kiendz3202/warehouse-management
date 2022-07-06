import React, { useEffect, useState } from 'react'
import Delete from '@mui/icons-material/Delete';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ItemWarehouse from '../Item/ItemWarehouse';
import Pagination from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productsSliceActions } from '../../store/productsSlice';
import ItemProduct from '../Item/ItemProduct';


function ProductList() {
    const productsData = useSelector((state) => state.products.products)
    // const [warehouseList, setWarehouseList] = useState(warehouseData)

    const dispatch = useDispatch()


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('http://165.22.49.78:10000/item')
                if (!response) {
                    throw new Error('somethign wrong');
                    return;
                }
                const data = await response.json()
                dispatch(productsSliceActions.saveProducts({
                    data: data.data
                }))
                // setWarehouseList(data)
                console.log(data.data)
            } catch (err) {
                console.log('fetch wrong')
            }
        }

        fetchProduct()
    }, [])

    const removeHandle = () => {

    }
    return (
        //bg-[#323259]
        <div className='bg-white rounded-md'>
            <div className='grid grid-cols-12 gap-3 text-black'>
                <div className='flex items-center col-span-1 my-[16px]'>
                    {/* <input type='checkbox' className='mr-[10px] leading-[24px] ml-[20px]' /> */}
                    <WarehouseIcon className='mr-[10px] leading-[24px] ml-[20px]' />
                </div>
                <div className=' col-span-3 my-auto   truncate'>name</div>
                <div className=' col-span-5 my-auto truncate'>description</div>
                <div className=' col-span-2 my-auto truncate'>location</div>
                <div className=' col-span-1 my-auto pl-[5px] flex justify-between truncate'>
                    <span className=' mr-[10px] rounded-sm'>Delete</span>
                    <span className=' mr-[10px] rounded-sm'>Edit</span>
                </div>
            </div>
            {/* {pagination.currentData ? pagination.currentData.map((item) => <ProductItem isSelectedAll={isSelectedAll} key={item.id} id={item.id} sku={item.sku} name={item.name} category={item.category} price={item.price} amount={item.amount} vendor={item.vendor} arrivalDate={item.arrivalDate} />) : <Box sx={{ display: 'flex' }}> */}
            {/* {productsData.map(product => <ItemProduct id={product.id} key={product.id} name={product.name} desc={product.desc} />)} */}
            {/* <CircularProgress /> */}
            {/* </Box>} */}
            {/* <Pagination getNumberPerPage={numberPerPageHandle} pageCount={pagination.pageCount} onPageChange={handleClick} /> */}
            {/* <Pagination /> */}
        </div>
    )
}

export default ProductList