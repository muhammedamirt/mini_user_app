import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './styles.css'


const SideMenu = ({  setComingSoon }) => {
    const {state} = useLocation()
    //setting states for menu tabs
    const [profileTab, setProfileTab] = useState(true)
    const [postTab, setPostTab] = useState(false)
    const [toDo, setToDoTab] = useState(false)
    const [galleryTab, setGalleryTab] = useState(false)
    const navigate = useNavigate()
    // function for profile tab
    const handleProfileTab = () => {
        setProfileTab(true)
        setPostTab(false)
        setGalleryTab(false)
        setToDoTab(false)
        setComingSoon(false)
        navigate('/Profile')
    }
    //function for post tab
    const handlePostTab = () => {
        setProfileTab(false)
        setPostTab(true)
        setGalleryTab(false)
        setToDoTab(false)
        setComingSoon(true)
    }
    // function for gallery tab
    const handleGalleryTab = () => {
        setProfileTab(false)
        setPostTab(false)
        setGalleryTab(true)
        setToDoTab(false)
        setComingSoon(true)
    }
    // function for todo tab
    const handleToDoTab = () => {
        setProfileTab(false)
        setPostTab(false)
        setGalleryTab(false)
        setToDoTab(true)
        setComingSoon(true)
    }
    let selected = "text-white font-bold py-2 pb-4 md:border-b-[1px] cursor-pointer"
    let unselected = "text-white opacity-60 font-semibold py-2 pb-4  md:border-b-[1px] cursor-pointer hover:opacity-80 hover:font-bold transition"
    return (

        <div className='sideMenu w-full md:rounded-3xl border h-full z-50'>
            <div className='flex items-center md:px-10 h-full'>
                <div className='w-full flex justify-around md:flex-col'>
                <Link to={'/Profile'} state={state}>
                    <div className={profileTab ? selected : unselected} onClick={handleProfileTab}>
                        <span className='sm:hidden '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        <h4 className='hidden sm:block'>Profile</h4>
                    </div>
                </Link>
                <Link to={'/Post'} state={state}>
                    <div className={postTab ? selected : unselected} onClick={handlePostTab}>
                        <span className='sm:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                            </svg>
                        </span>
                        <h4 className='hidden sm:block'>Post</h4>
                    </div>
                </Link>
                <Link to={'/Gallery'} state={state}>
                    <div className={galleryTab ? selected : unselected} onClick={handleGalleryTab}>
                        <span className='sm:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </span>
                        <h4 className='hidden sm:block'>Gallery</h4>
                    </div>
                </Link>
                    <Link to={'/ToDo'} state={state}>
                        <div className={toDo ? selected : unselected} onClick={handleToDoTab}>
                            <span className='sm:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </span>
                            <h4 className='hidden sm:block'>To Do</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SideMenu