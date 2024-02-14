import React from 'react'
import ProfileCard from './ProfileCard'

export default function HomeProfiles({profiles}) {
  return (
    <div className='my-4 mx-8'>
        <section className='flex flex-col justify-center items-center px-4'>
            <div className='text-center text-4xl mb-4 font-semibold'>
                <h1>
                    Only True People
                </h1>
            </div>
            <div className='text-center text-lg'>
                <p className="whitespace-pre-line">
                    Every user registered on GO is verified via photo and mobile phone so you don’t 
                    have to worry how real or fake anyone is.
                </p>
            </div>
        </section>
        <section className='my-4 mx-4'>
            <div className='grid grid-cols-3 gap-4 mb-2'>
                {profiles?.map((profile) => {
                    return(
                        <ProfileCard key={profile.id} profile={profile} />
                    )
                })}
            </div>
            <div className='flex items-center justify-center'>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        View More
                    </span>
                </button>
            </div>
        </section>
    </div>
  )
}
