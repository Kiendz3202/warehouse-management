import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({ onPageChange, pageCount, getNumberPerPage }) {

    // const {onPageChange,pageCount,getNumberPerPage} = props
    const handlePageClick = (e) => {
        onPageChange(e)
    }

    const getValueHandle = (e) => {
        getNumberPerPage(e.target.value)
    }

    return (
        <div className='flex bg-white   p-[20px] border-t border-black'>
            <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                activeClassName=' text-blue-500'
                onPageChange={handlePageClick}
                containerClassName={'inline-flex -space-x-px'}
                pageClassName={''}
                pageLinkClassName={'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                previousLinkClassName={' py-2 px-3 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                nextLinkClassName={' py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
            />
            <div className='ml-[5px] '>
                <select onClick={getValueHandle} defaultValue='2' className='bg-[#1e2835] text-white rounded-md'>
                    <option value="2" >2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                </select>
            </div>
        </div>
    )
}

export default Pagination