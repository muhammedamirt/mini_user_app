import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserProfile = ({ userData, users }) => {
    const navigate = useNavigate()
    return (
        <div className='bg-white z-50 shadow w-64 rounded-3xl'>
            <div className='flex justify-center py-3'>
                <div>
                    <div>
                        <img className='h-20 w-20 rounded-full object-cover' src={userData.profilepicture} alt="" />
                    </div>
                    <div>
                        <p className='text-center'>{userData.name}</p>
                        <p className='text-center'>{userData.email}</p>
                    </div>
                </div>
            </div>
            <hr className='mx-5' />
            {users.length !== 0 ?
                users.map((user) => (
                    // <Link to={'/Profile'} state={user}>
                    <div className='px-5 py-2 cursor-pointer' onClick={() => navigate('/Profile', { state: user })}>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <img className='h-8 w-8 rounded-full object-cover' src={user.profilepicture} alt="" />
                            </div>
                            <div className='text-md font-semibold text-gray-500'>
                                <p>{user.name}</p>
                            </div>
                        </div>
                    </div>
                    // </Link>
                ))
                : null}
            <hr className='mx-5 ' />

            <div className='flex justify-center py-3'>
                <Link to={'/'}>
                    <button className='bg-red-600 px-3 py-1 rounded-full font-semibold text-white'>
                        Sign out
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default UserProfile