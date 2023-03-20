import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ChatCard from '../../components/ChatCard'
import ComingSoon from '../../components/ComingSoon'
import MessageCard from '../../components/MessageCard'
import ProfileSection from '../../components/ProfileSection'
import SectionHead from '../../components/SectionHead'
import SideMenu from '../../components/SideMenu'

const Profile = () => {
  const { state, pathname } = useLocation()
  const [userData, setUserData] = useState(state)
  useEffect(()=>{
    setUserData(state)
  },[state])
  const [comingSoon, setComingSoon] = useState(false)
  return (
    <div className='md:py-5 md:px-5'>
      <div className='h-[100vh]  rounded-3xl md:flex gap-10'>
        <div className='w-full md:w-3/12 md:h-[100vh] fixed bottom-0 md:static'>
          <SideMenu setComingSoon={setComingSoon} />
        </div>
        <div className='md:w-10/12 h-full'>
          <div>
          <div className=''>
            <SectionHead userData={userData} head={'profile'} />
          </div>
            {pathname === '/Profile' ?
              <div className='mt-5 h-full'>
                <ProfileSection userData={userData} comingSoon={comingSoon} />
              </div> :
              <div className='h-full'>
                <ComingSoon />
              </div>
            }
          </div>
          <div className='fixed flex gap-4 z-30 right-10 md:bottom-0 bottom-14 transition duration-300'>
            {/* <MessageCard /> */}
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 