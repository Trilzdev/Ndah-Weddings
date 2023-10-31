import React from 'react'
import GetInTouch from './GetInTouch'

const NotAvailable = () => {
  return (
    <div className=' py-16 text-center'>
        <h1 className=' font-bold text-2xl'>
            Service unavailable
        </h1>
        <p className=' text-xl pb-16'>
            We are sorry to inform you that this service is unavailable but you can reach us at
        </p>
        <GetInTouch/>
    </div>
  )
}

export default NotAvailable