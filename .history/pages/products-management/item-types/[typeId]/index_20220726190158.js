import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function TypeId() {
    const [id, setId] = useState()
    const router = useRouter()
    const { typeId } = router.query
    // useEffect(() => {
    //     setId(typeId)
    // }, [])
    console.log(typeId)
    return (
        <div>{typeId}</div>
    )
}

export default TypeId