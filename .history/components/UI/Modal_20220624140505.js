import React, { Children, useEffect, useState } from 'react'

function Modal({ show, onclose, chidren }) {

    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleClose = () => {
        onclose()
    }

    const modalContent = show ? (
        <div>
            <div onClick={() => handleClose}>close</div>
            <div>{children}</div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal-root')
        )
    } else {
        return null
    }
}

export default Modal