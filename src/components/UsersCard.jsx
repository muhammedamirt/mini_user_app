import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UsersCard = () => {
  const [users, setUsers] = useState([])

  //fetching user data

  useEffect(() => {
    const fetchUsersData = async () => {
      const { data } = await axios.get('https://panorbit.in/api/users.json')
      setUsers(data?.users)
    }
    fetchUsersData()
  }, [])

  return (
    <div>
      <div className='bg-white w-[500px] h-[500px] rounded-3xl shadow-md shadow-gray-300'>
        <div className='bg-gray-100 rounded-t-3xl py-7'>
          <h3 className='text-center font-bold text-xl text-gray-600 '>Select an account</h3>
        </div>
        <div className='py-2 px-7 overflow-y-scroll h-[400px]'>
          {users.length !== 0 ? users.map(user => (
            <div className='flex gap-2 border-b-[1px] border-gray-400 py-2'>
              <div>
                <img className='h-8 w-8 rounded-full object-cover' src={user?.profilepicture} alt="" />
              </div>
              <Link to={'/Profile'} state={user}>
                <h1 className='flex items-center font-semibold text-gray-500'>{user?.name}</h1>
              </Link>
            </div>
          ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default UsersCard