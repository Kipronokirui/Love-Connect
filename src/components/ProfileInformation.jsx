import React from 'react'

export default function ProfileInformation({profile}) {
  return (
    <div className='p-4'>
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Basic Information
                    </h1>
                </div>
                <div className='mb-2 flex items-center justify-start space-x-4 border-2 bg-white p-2'>
                    <div className='border-r-2 px-4'>
                        <p className='text-lg leading-8 text-gray-600'>
                            Age: <span>{profile?.age}</span> Years
                        </p>
                    </div>
                    <div>
                        <p className='text-lg leading-8 text-gray-600'>
                            Active <span>{profile?.last_active}</span> ago
                        </p>
                    </div>
                </div>
                <div className='mb-2'>
                    <p className='text-lg leading-8 text-gray-600'>
                        {profile?.about}
                    </p>
                </div>
                <div>
                    <ul className='pe-4'>
                        <li className='py-2 border-b border-gray-600'>
                            <div className='flex px-2 items-center space-x-20'>
                                <div className="w-32">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        I`m a
                                    </h1>
                                </div>
                                <div className="flex-grow">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        {profile?.gender}
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li className='py-2 border-b border-gray-600'>
                            <div className='flex px-2 items-center space-x-20'>
                                <div className="w-32">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        Looking For a
                                    </h1>
                                </div>
                                <div className="flex-grow">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        {profile?.interested_in_gender}
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li className='py-2 border-b border-gray-600'>
                            <div className='flex px-2 items-center space-x-20'>
                                <div className="w-32">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        Country
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        {profile?.country}
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li className='py-2 border-b border-gray-600'>
                            <div className='flex px-2 items-center space-x-20'>
                                <div className="w-32">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        City
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        {profile?.city}
                                    </h1>
                                </div>
                            </div>
                        </li>
                        <li className='py-2 border-b border-gray-600'>
                            <div className='flex px-2 items-center space-x-20'>
                                <div className="w-32">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        Interests
                                    </h1>
                                </div>
                                <div>
                                    {profile?.interests?.map((interest, index) => {
                                        return(
                                            <h1 className='text-lg leading-8 text-gray-600'>
                                                {interest}
                                            </h1>
                                        )
                                    }) }
                                    
                                </div>
                            </div>
                        </li>
                        <li className='py-2 border-b border-gray-600'>
                            <div className='flex px-2 items-center space-x-20'>
                                <div className="w-32">
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        Children
                                    </h1>
                                </div>
                                <div>
                                    {profile?.children > 0 ? (
                                        <h1>
                                            <span className='font-semibold me-1'>
                                                {profile?.children}
                                            </span> 
                                            Children 
                                        </h1>
                                    ) : (
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        No Children
                                    </h1>
                                    )}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
