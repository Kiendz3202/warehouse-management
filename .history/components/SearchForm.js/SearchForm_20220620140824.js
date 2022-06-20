import React, { useState, useRef } from 'react'
import { Filter } from '@mui/icons-material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function SearchForm() {

    const [active, setActive] = useState(false)
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('transform duration-700 ease')
    const contentSpace = useRef(null)

    const expandAndCollapse = () => {
        setActive(active === false ? true : false)
        setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
        setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
    }

    return (
        // bg-[#323259]
        <div>
            <div className=' border-white border w-full px-[20px] pt-[20px]'>
                <div className='grid grid-cols-12 gap-3 h-[62px] text-white '>
                    <div className=' col-span-5 border border-white'>
                        <input className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-blue-400 text-white placeholder-white ' placeholder='Search keywords' type='text' />
                    </div>
                    <div className='col-span-3'>
                        <select defaultValue='anycategory' className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                            <option value='anycategory'>Any category</option>
                            {/* {categories.map((category, index) => (<option value={category.name} key={category.id}>{category.name}</option>))} */}

                        </select>
                    </div>
                    <div className='col-span-3'>
                        <select defaultValue='anystock' className=' w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                            <option value="anystock">Any stock status</option>
                            <option value="instock">In stock</option>
                            <option value="lowstock">Low Stock</option>
                            <option value="sold">SOLD</option>
                        </select>
                    </div>
                    <div className='col-span-1 h-[38px] rounded-md px-[12px] py-[6px] bg-[#b18aff] cursor-pointer'>
                        <button className='text-black hover:opacity-80' >Search</button>
                    </div>
                </div>
                <div className={`flex relative transition-maxHeight duration-700 ease-in-out overflow-hidden`} ref={contentSpace} style={{ maxHeight: `${height}` }}>
                    <div className=' absolute top-[-20px] h-[1px] bg-[#1b1b38] w-[1191px] left-[-20px] '></div>
                    <div className='flex  mr-[40px]'>
                        <div className='mr-[15px]'>Search in:</div>
                        <div className='ml-[10px]'>
                            <ul>
                                <li>
                                    <input type='checkbox' id='name' />
                                    <label htmlFor='name'>Name</label>
                                </li>
                                <li>
                                    <input type='checkbox' id='sku' />
                                    <label htmlFor='sku'>SKU</label>
                                </li>
                                <li className='mb-[8px]'>
                                    <input type='checkbox' id='fulldescription' />
                                    <label htmlFor='fulldescription'>Full Description</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex mt-[20px] mr-[40px]'>
                        <div className='mr-[15px]'>Availability</div>
                        <div>
                            <select className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm'>
                                <option value="">Any Availability Status</option>
                                <option value="">Only Enabled</option>
                                <option value="">Only Disabled</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex mt-[20px]'>
                        <div className='mr-[15px]'>Vendor</div>
                        <div>
                            <input className='w-full h-[38px] py-[7px] px-[16px] outline-none bg-[#252547] rounded-sm' type='text' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div onClick={expandAndCollapse} className=' w-[50px]  text-center cursor-pointer'>
                    <KeyboardArrowDown className={`h-fullr transition-transform ${rotate}`} />
                </div>
            </div>
        </div>
    )
}

export default SearchForm