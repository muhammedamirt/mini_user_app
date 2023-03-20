import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ChatCard from '../../components/ChatCard'
import ComingSoon from '../../components/ComingSoon'
import MessageCard from '../../components/MessageCard'
import ProfileSection from '../../components/ProfileSection'
import SectionHead from '../../components/SectionHead'
import SideMenu from '../../components/SideMenu'

const Profile = () => {
  const { state } = useLocation()
  const [userData, setUserData] = useState(state)
  return (
    <div className='md:py-5 md:px-5'>
      <div className='h-[100vh]  rounded-3xl md:flex gap-10'>
        <div className='w-full md:w-3/12 md:h-[100vh] fixed bottom-0 md:static'>
          <SideMenu />
        </div>
        <div className='md:w-10/12 h-full'>
          <div className=''>
            <SectionHead userData={userData} head={'profile'} />
          </div>
          <div className='mt-5 h-full'>
            <ProfileSection userData={userData} />
          </div>
          {/* <div className='h-full'>
            <ComingSoon />
          </div> */}
          <div className='fixed flex gap-4 z-30 right-10 bottom-14 transition duration-300'>
            {/* <MessageCard /> */}
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 