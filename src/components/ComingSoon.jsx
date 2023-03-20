import React from 'react'
import SideMenu from './SideMenu'

const ComingSoon = () => {
  return (
    <div className='md:py-5 md:px-5'>
      <div className='h-[100vh]  rounded-3xl md:flex gap-10'>
        <div className='w-full md:w-3/12 md:h-[100vh] fixed bottom-0 md:static'>
          <SideMenu />
        </div>
        <div className='border h-[80vh] flex justify-center items-center text-gray-300 opacity-60' >
          <h1 className='font-bold text-[90px]'>Coming Soon</h1>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon