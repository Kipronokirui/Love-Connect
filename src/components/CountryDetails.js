import React, {useState, useEffect} from 'react'
import {useParams } from "react-router-dom";
import { userProfiles } from '../utils/profiles'
import { countries } from '../utils/countries'
import profile_background from '../assets/bg_profile.jpg'
import ProfileCard from './ProfileCard'


export default function CountryDetails() {
    const { slug } = useParams();
    const country = countries.find(country => country.slug === slug);
    const [profiles, setProfiles] = useState([])
    const [countryProfiles, setCountryProfiles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        setProfiles(userProfiles);
        const wantedProfiles = profiles.filter(
          (profile) => profile.country === country.name
        );
    
        // Using a callback function to ensure you get the updated state
        setCountryProfiles((prevCountryProfiles) => [...prevCountryProfiles, ...wantedProfiles]);
    
        setLoading(false);
    }, [country.name, profiles]);

    const CountryDetailsHero = () => {
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
                                {country.name}
                            </h1>
                        </div>
                        <div className="text-center px-8">
                            <h1 className='text-white text-2xl'>
                                Connect with people from <span>{country.name}</span>
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
            <CountryDetailsHero />
        </div>
        <div className='my-4 mx-8'>
            <section className='my-4 mx-4'>
                {loading ? (
                    <h1>Loading...</h1>
                    ) : (
                    <div>
                        {countryProfiles.length > 0 ? (
                            <div className='grid grid-cols-3 gap-4 mb-2'>
                                {countryProfiles?.map((profile) => {
                                    return(
                                        <ProfileCard key={profile.id} profile={profile} />
                                    )
                                })}
                            </div>
                        ) : (
                            <div>There are no profiles</div>
                        )}
                    </div>
                )}
                
            </section>
        </div>
    </div>
  )
}
