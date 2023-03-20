import React, { useState } from 'react'
import UserProfile from './UserProfile'

const SectionHead = ({ userData, head }) => {
  const [openProfile, setOpenProfile] = useState(false)
  return (
    <div className='py-6 w-full border-gray-400 border-b-[1px] '>
      <div className='flex justify-between px-10 md:pr-10'>
        <div className='text-xl font-semibold text-gray-500'>
          {head}
        </div>
        <div>
          <div className='flex gap-3 items-center cursor-pointer' onClick={() => setOpenProfile(!openProfile)}>
            <div>
              <img className='h-8 w-8 rounded-full object-cover' src={userData.profilepicture} alt="" />
            </div>
            <div className='text-md font-semibold text-gray-500 hidden sm:block'>
              <p>{userData.name}</p>
            </div>
          </div>
          {openProfile &&
            <div className='fixed right-10 transition duration-300'>
              <UserProfile userData={userData} />
            </div>
            }
        </div>
      </div>
    </div>
  )
}

export default SectionHead