import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return (
    <div>
      <div className=' '>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  )
}

export default Notification
