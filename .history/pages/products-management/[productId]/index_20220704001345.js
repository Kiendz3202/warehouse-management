import { useRouter } from 'next/router'
import React from 'react'

function ProductId() {

    const router = useRouter()
    const { productId } = router.query
    console.log()
    return (
        <div className=' text-black'>{productId}</div>
    )
}

export default ProductId