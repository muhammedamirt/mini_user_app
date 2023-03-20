import React from 'react'
import UsersCard from '../../components/UsersCard'

const Home = () => {
    return (
        <div>
            <div className='bg-blue-500 h-[100vh] bg-[url(https://cdn.wallpapersafari.com/15/0/iG9ruB.jpg)]'>
                <div className='flex justify-center items-center h-[100vh]'>
                    <UsersCard />
                </div>
            </div>
        </div>
    )
}

export default Home