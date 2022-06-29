import React, { Children, useEffect, useState } from 'react'

export default function Modal({ show onclose, chidren }) {

    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const modalContent = show ? (
        <div>
            <div onClick={() => handleClose}>close</div>
            <div>{children}</div>
        </div>
    ) : null
}

export default Modal