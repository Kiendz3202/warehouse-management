import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

function TypeId() {
    const [id, setId] = useState()
    const { typeId } = useRouter()
    useEffect(() => {
        setId(typeId)
    }, [])
    return (
        <div>{id && id}</div>
    )
}

export default TypeId