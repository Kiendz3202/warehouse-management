import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function ProductId() {

    const [productDetail, setProductDetail] = useState([])

    const router = useRouter()
    const { productId } = router.query


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch('https://scm-tool.thanhpp.ninja/item')

                if (!res) {
                    throw new Error('can not fetch data')
                    return;
                }

                const data = await res.json()

                const item = data.data.filter((product) => product.sku === 'sku2')

                setProductDetail(item)
                console.log(productId)

            } catch (err) {
                console.log(err)
            }

        }

        fetchProduct()
    }, [])

    return (
        <div className=' text-black'>{productId}</div>
    )
}

export default ProductId