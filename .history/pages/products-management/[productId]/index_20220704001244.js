import { useRouter } from 'next/router'
import React from 'react'

function ProductId() {

    const router = useRouter()
    const { ProductId } = router.query

    return (
        <div>{ProductId}</div>
    )
}

export default ProductId