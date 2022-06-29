import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classes from './modal.module.css'

function Modal({ show, onclose, children }) {

    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleClose = () => {
        onclose()
        console.log('123')
    }

    const modalContent = show ? (
        <div>
            {/* <div className={classes.backdrop} onClick={() => handleClose}>Close</div> */}
            <div className={classes.modal}>
                <div className=' cursor-pointer' onClick={handleClose}>close</div>
                <div className={classes.content}>{children}</div>
            </div>
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