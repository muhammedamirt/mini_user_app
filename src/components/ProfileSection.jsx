import React from 'react'

const ProfileSection = ({ userData, comingSoon }) => {
    return (
        <div>
            {
                !comingSoon ?
                    <div className='md:flex w-full '>
                        <div className='h-full md:w-4/12 '>
                            <div className='w-full  flex justify-center'>
                                <div>
                                    <div>
                                        <img className='h-44 w-44 rounded-full object-cover' src={userData.profilepicture} alt="" />
                                    </div>
                                    <div className='w-full'>
                                        <h4 className='text-center text-gray-600 font-bold my-2 text-xl'>
                                            {userData.name}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-full py-1 text-center '>
                                    <ul>

                                        <p className='text-gray-400 font- text-xl'>
                                            username :<span className='text-gray-600 font-bold'> {userData.username}</span>
                                        </p>
                                        <p className='text-gray-400 font- text-xl'>
                                            E-mail:<span className='text-gray-600 font-bold'> {userData.email}</span>
                                        </p>
                                        <p className='text-gray-400 font- text-xl'>
                                            Phone :<span className='text-gray-600 font-bold'> {userData.phone}</span>
                                        </p>
                                        <p className='text-gray-400 font- text-xl'>
                                                Website :<span className='text-gray-600 font-bold'> {userData.website}</span>
                                        </p>
                                    </ul>
                                </div>
                                <hr className='mx-5 my-2' />
                                <h5 className='text-center text-gray-400  text-xl'>company</h5>
                                <div className='w-full py-1 text-center '>
                                    <p className='text-gray-400 font- text-xl'>
                                        Name :<span className='text-gray-600 font-bold'> {userData.company.name}</span>
                                    </p>
                                    <p className='text-gray-400 font- text-xl'>
                                        Catchphrase:<span className='text-gray-600 font-bold'> {userData.company.Catchphrase}</span>
                                    </p>
                                    <p className='text-gray-400 font- text-xl'>
                                        bs :<span className='text-gray-600 font-bold'> {userData.company.bs}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='md:border-l-2 px-2 border-gray-400 md:w-8/12 flex justify-center'>
                            <div>
                                <span className='flex justify-center'>
                                    <div>
                                        <p className=' text-gray-400 text-xl'>
                                            Address :
                                        </p>
                                        <div className='w-full py-1 px-10 '>
                                            <p className='text-gray-400 font- text-xl'>
                                                Street :<span className='text-gray-600 font-bold'> {userData.address.street}</span>
                                            </p>
                                            <p className='text-gray-400 font- text-xl'>
                                                Suite:<span className='text-gray-600 font-bold'> {userData.address.suite}</span>
                                            </p>
                                            <p className='text-gray-400 font- text-xl'>
                                                City :<span className='text-gray-600 font-bold'> {userData.address.city}</span>
                                            </p>
                                            <p className='text-gray-400 font- text-xl'>
                                                Zipcode :<span className='text-gray-600 font-bold'> {userData.address.zipcode}</span>
                                            </p>
                                            <div className='p-2'>
                                                <div className=''>
                                                    <img className="rounded-3xl" src="https://i1.wp.com/onaircode.com/wp-content/uploads/2019/10/Responsive-Google-Map.jpg?fit=1024%2C588&ssl=1" alt="" />
                                                </div>
                                                <div className='flex justify-end gap-5 text-xs'>
                                                    <p className='text-gray-400 '>Lat: <span className='text-gray-600 font-bold'>{userData.address.geo.lat}</span></p>
                                                    <p className='text-gray-400 '>Long: <span className='text-gray-600 font-bold'>{userData.address.geo.lng}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    : <comingSoon />
            }
        </div>
    )
}

export default ProfileSection