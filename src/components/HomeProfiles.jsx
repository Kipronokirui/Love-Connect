import React from 'react'
import ProfileCard from './ProfileCard'
import profile01 from "../assets/profile01.jpg"
import profile02 from "../assets/profile02.jpg"
import profile03 from "../assets/profile03.jpg"
import profile04 from "../assets/profile04.jpg"
import profile05 from "../assets/profile05.jpg"
import profile06 from "../assets/profile06.jpg"

// export const profiles = [
//     {
//         id:1,
//         name:"John Wilson",
//         cover_photo: profile01,
//         last_active:"4 days",
//     },
//     {
//         id:2,
//         name:"Joshua Kimmich",
//         cover_photo: profile02,
//         last_active:"4 days",
//     },
//     {
//         id:3,
//         name:"Andrew Kibe",
//         cover_photo:profile03,
//         last_active:"4 days",
//     },
//     {
//         id:4,
//         name:"Sabina Chege",
//         cover_photo: profile04,
//         last_active:"4 days",
//     },
//     {
//         id:5,
//         name:"Cate Waruguru",
//         cover_photo: profile05,
//         last_active:"4 days",
//     },
//     {
//         id:6,
//         name:"Charlene Ruto",
//         cover_photo: profile06,
//         last_active:"4 days",
//     },
// ]
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
