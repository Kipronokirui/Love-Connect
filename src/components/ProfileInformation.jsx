import React from 'react'

export default function ProfileInformation() {
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
                            Age: 22 Years
                        </p>
                    </div>
                    <div>
                        <p className='text-lg leading-8 text-gray-600'>
                            Active 10 days ago
                        </p>
                    </div>
                </div>
                <div className='mb-2'>
                    <p className='text-lg leading-8 text-gray-600'>
                        Pellentesque quis dui varius, dapibus velit id, iaculis ipsum. 
                        Morbi ac eros feugiat, lacinia elit ut elementum turpis. Curabitur justo sapien, 
                        tempus sit amet rutrum eu, commodo eu lacus. Morbi in ligula nibh. 
                        Maecenas ut mi at odio hendrerit eleifend tempor vitae augue. 
                        Fusce eget arcu et nibh dapibus maximus consectetur in est.
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
                                        Male
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
                                        Male
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
                                        Kenya
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
                                        Nairobi
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
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        Swimming
                                    </h1>
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
                                    <h1 className='text-lg leading-8 text-gray-600'>
                                        No Children
                                    </h1>
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
