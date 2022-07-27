import React from 'react'
import { useRouter } from 'next/router'

function TypeId() {
    const { typeId } = useRouter()
    return (
        <div>{typeId}</div>
    )
}

export default TypeId