import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import UserProfile from './UserProfile'

const SectionHead = ({ userData }) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsersData = async () => {
      const { data } = await axios.get('https://panorbit.in/api/users.json')
      let randomUsers = []
      for (let i = 0; i < 2; i++) {
        randomUsers.push(data.users[Math.floor(Math.random() * data.users.length -1)])
      }
      setUsers(randomUsers)
    }
    fetchUsersData()
  }, [])

  const [openProfile, setOpenProfile] = useState(false)
  const { pathname } = useLocation()
  return (
    <div className='py-6 w-full border-gray-400 border-b-[1px] '>
      <div className='flex justify-between px-10 md:pr-10'>
        <div className='text-xl font-semibold text-gray-500'>
          {pathname.split('/')}
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
            <div className='fixed right-10 transition duration-300 Z-50'>
              <UserProfile userData={userData} users={users}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default SectionHead