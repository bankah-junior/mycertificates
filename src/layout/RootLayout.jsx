import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageLoader } from '../components'

const RootLayout = () => {
  return (
    <div className='relative'>
      <PageLoader />
        <Outlet />
    </div>
  )
}

export default RootLayout