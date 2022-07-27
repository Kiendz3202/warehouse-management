import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function TypeId() {
    const [id, setId] = useState()
    const router = useRouter()
    const { typeId } = router.query


    const fetchProduct = async () => {
        setLoading(true)
        try {
            const res = await fetch(`https://scm-tool.thanhpp.ninja/item`)

            if (!res.ok) {
                throw new Error('can not fetch data')
                return;
            }

            const data = await res.json()

            const item = data.data.filter((product) => product.sku === productId)

            setProductDetail(...item)
            setImage(item[0].images[0])

            console.log(...item)

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

        fetchProduct()
    }, [router.isReady])


    const skuHandle = (e) => {
        // setSku(e.target.value)
        setProductDetail(prev => {
            return {
                ...prev,
                sku: e.target.value
            }
        })
    }

    const nameHandle = (e) => {
        // setName(e.target.value)
        setProductDetail(prev => {
            return {
                ...prev,
                name: e.target.value
            }
        })
    }

    const descHandle = (e) => {
        // setDesc(e.target.value)
        setProductDetail(prev => {
            return {
                ...prev,
                desc: e.target.value
            }
        })
    }

    const itemTypeIdHandle = (e) => {
        // setItemTypeId(e.target.value)
        setProductDetail(prev => {
            return {
                ...prev,
                itemTypeId: e.target.value
            }
        })
    }

    const imageHandle = (e) => {
        // setImage(e.target.value)
        setProductDetail(prev => {
            return {
                ...prev,
                image: e.target.value[0]
            }
        })
    }

    const updateProductHandle = async () => {
        setLoading(true)

        const dataForm = new FormData()

        dataForm.append('sku', productDetail.sku)
        dataForm.append('name', productDetail.name)
        dataForm.append('desc', productDetail.desc)
        dataForm.append('item_type_id', productDetail.itemTypeId)
        dataForm.append('images', productDetail.image)

        console.log(dataForm)

        try {
            const res = await fetch(` https://scm-tool.thanhpp.ninja/item/${productId}`, {
                method: 'PUT',
                body: dataForm
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
        <div>{typeId}</div>
    )
}

export default TypeId