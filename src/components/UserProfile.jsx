import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = ({userData}) => {
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
            <div className='px-5 py-2'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='h-8 w-8 rounded-full object-cover' src="https://i1.wp.com/onaircode.com/wp-content/uploads/2019/10/Responsive-Google-Map.jpg?fit=1024%2C588&ssl=1" alt="" />
                    </div>
                    <div className='text-md font-semibold text-gray-500'>
                        <p>name</p>
                    </div>
                </div>
            </div>
            <hr className='mx-5 ' />
            <div className='px-5 py-2'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='h-8 w-8 rounded-full object-cover' src="https://i1.wp.com/onaircode.com/wp-content/uploads/2019/10/Responsive-Google-Map.jpg?fit=1024%2C588&ssl=1" alt="" />
                    </div>
                    <div className='text-md font-semibold text-gray-500'>
                        <p>name</p>
                    </div>
                </div>
            </div>
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