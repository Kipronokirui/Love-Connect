import React, {useState, useEffect} from 'react'
import profile_background from '../assets/bg_profile.jpg'
// import profile_photo from "../assets/profile01.jpg"
import ProfileInformation from './ProfileInformation'
import ProfileGallery from './ProfileGallery'
import {useParams } from "react-router-dom";
import { userProfiles } from '../utils/profiles'

export default function UserProfile() {
    const { id } = useParams();
    const [component, setComponent] = useState("information")
    const [userProfile, setUserProfile] = useState()
    const [loading, setLoading] = useState(false)
    // const wantedProfile = userProfiles.find(profile => profile.id === id)

    useEffect(() => {
        setLoading(true)
        const profileId = parseInt(id, 10);
        const profile = userProfiles.find(profile => profile.id === profileId)
        setUserProfile(profile)
        setLoading(false)
    }, [id]);

    const ProfileHero = () => {
        return(
            <div 
                className='relative overflow-hidden flex items-center'
                style={{
                    backgroundImage: `url(${profile_background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '350px',
                }}
            >
                {userProfile&& 
                    <div className='mx-auto'>
                        <section className='flex flex-col items-center justify-center space-y-2'>
                            <div>
                                <img 
                                    className={`w-28 h-28 p-1 rounded-full ring-2 ring-white `} 
                                    src={userProfile?.cover_image} 
                                    alt="Bordered avatar" 
                                />
                            </div>
                            <div>
                                <h1 className='text-white text-3xl'>
                                    {userProfile?.name}
                                </h1>
                            </div>
                        </section>
                    </div>
                }
            </div>
        )
    }
  return (
    <div>
        <div>
            <ProfileHero />
        </div>
        <section className='bg-gray-200 p-4'>
            <div className='flex items-center space-x-4 pl-6 border-b border-purple-600 pb-4'>
                <div>
                    <button
                        onClick={() => setComponent("information")}
                        className={`inline-block p-4 border-b-2  rounded-t-lg ${component === "information" ? "text-blue-600 border-blue-600" : "text-gray-600 hover:text-blue-600 hover:border-blue-600"} `}
                    >
                        Information
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => setComponent("gallery")}
                        className={`inline-block p-4 border-b-2 rounded-t-lg ${component === "gallery" ? "text-blue-600 border-blue-600" : "text-gray-600 hover:text-blue-600 hover:border-blue-600"} `}
                    >
                        Gallery
                    </button>
                </div>
            </div>
            {loading ? (
                <h1>Loading....</h1>
                ) : (
                <div className='border-b border-purple-800'>
                    {component === "information" ? (
                        <ProfileInformation profile={userProfile}/>
                    ) : (
                        <ProfileGallery profile={userProfile}/>
                    )}
                </div>
            )}
        </section>
    </div>
  )
}
