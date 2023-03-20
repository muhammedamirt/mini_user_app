import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ChatCard = () => {
    const [openChats, setOpenChats] = useState(false)
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsersData = async () => {
            const { data } = await axios.get('https://panorbit.in/api/users.json')
            setUsers(data?.users)
        }
        fetchUsersData()
    }, [])
    return (
        <div className=' bg-white shadow-md shadow-gray-400 rounded-t-xl md:w-60 '>
            <div className='bg-[#0052cc] rounded-t-xl py-3 px-5 text-white flex gap-2 justify-between w-full cursor-pointer' onClick={() => setOpenChats(!openChats)}>
                <div className='flex gap-2'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </span>
                    <p className='hidden md:block'>
                        Chats
                    </p>
                </div>
                <div className='hover:shadow-inner hidden md:block  shadow-gray-600 px-1 py-1 rounded-full '>
                    {!openChats ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    }
                </div>
            </div>
            {openChats &&
                <div className='px-2 max-h-64 overflow-y-scroll'>
                    {users.length !== 0 ?
                        users.map(user => (
                            <div className='flex gap-3 items-center cursor-pointer py-1 px-2 '>
                                <div>
                                    <img className='h-8 w-8 rounded-full object-cover' src={user.profilepicture} alt="" />
                                </div>
                                <div className='text-md font-semibold text-gray-500 '>
                                    <p>{user.name}</p>
                                </div>
                            </div>
                        ))
                        : null}
                </div>
            }
        </div>
    )
}
export default ChatCard