import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function TypeId() {
    const [id, setId] = useState()
    const { typeId } = useRouter()
    // useEffect(() => {
    //     setId(typeId)
    // }, [])
    return (
        <div>{typeId}</div>
    )
}

export default TypeId