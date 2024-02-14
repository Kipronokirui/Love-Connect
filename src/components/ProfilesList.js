import React, {useState, useEffect} from 'react'
import profile_background from '../assets/bg_profile.jpg'
import { userProfiles } from '../utils/profiles'
// import { countries } from '../utils/countries'
import ProfileCard from './ProfileCard'

export default function ProfilesList() {
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setProfiles(userProfiles)
        setLoading(false)
    }, []);

    const ProfileListHero = () => {
        return(
            <div 
                className='relative overflow-hidden flex items-center'
                style={{
                    backgroundImage: `url(${profile_background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '250px',
                }}
            >
                <div className='mx-auto'>
                    <section className='flex flex-col items-center justify-center space-y-2'>
                        <div>
                            <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                                Search Profiles
                            </h1>
                        </div>
                        <div className="text-center px-8">
                            <h1 className='text-white text-2xl'>
                                Connect with people
                            </h1>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
  return (
    <div>
        <div>
            <ProfileListHero />
        </div>
        <section className='p-4'>
            <div>
                {loading? (
                    <h1>Loading....</h1>
                    ) : (
                    <section className='grid grid-cols-3 gap-4'>
                        <div className='col-span-2'>
                            <section className='my-4 mx-4'>
                                <div className='grid grid-cols-3 gap-4 mb-2'>
                                    {profiles?.map((profile) => {
                                        return(
                                            <ProfileCard key={profile.id} profile={profile} />
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                        {/* <div className='col-span-1'>
                            Form
                        </div> */}
                    </section>
                )}
            </div>
        </section>
    </div>
  )
}
