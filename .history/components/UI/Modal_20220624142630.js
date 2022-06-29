import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classes from './modal.module.css'
import CloseIcon from '@mui/icons-material/Close';

function Modal({ show, onClose, children }) {

    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleClose = () => {
        onClose()
    }

    const modalContent = show ? (
        <div>
            {/* <div className={classes.backdrop} onClick={() => handleClose}>Close</div> */}
            <div className={classes.modal}>
                <div className=' cursor-pointer flex justify-end' onClick={handleClose}><CloseIcon /></div>
                <div className={classes.content}>{children}</div>
                <div>
                    <button>Save</button>
                </div>
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