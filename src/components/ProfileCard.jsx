import React from 'react'
import { GoClock } from "react-icons/go";

export default function ProfileCard({profile}) {
  return (
    <div>
        <div 
            className={`h-[300px] w-full bg-cover relative rounded-md`}
            style={{
                backgroundImage: `url(${profile.cover_image})`
            }}
        >
            <div className="absolute inset-0 bg-black opacity-25 rounded-md"></div>
            <div className="absolute bottom-0 px-4 py-3 w-full">
                <div className='mb-8'>
                    <a href={`/profile/${profile.id}`} className="text-white font-semibold text-4xl hover:underline"> 
                        {profile.name} 
                    </a>
                    <p className="text-gray-200 flex items-center space-x-2">
                        <span>
                            <GoClock />
                        </span>
                        <span>
                            {profile.last_active} ago
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
