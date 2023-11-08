import { useState } from "react"
import PropTypes from 'prop-types'

export const Modal = ({ message }) => { 
    const [openAttr, setOpen] = useState("open")

    const handleClose = () => {
        setOpen("");
    }
    return (
        <dialog role="alert" open={openAttr}>
              {message}
              <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
            </dialog>
    );
   
}
Modal.propTypes = {
    message: PropTypes.string.isRequired
}