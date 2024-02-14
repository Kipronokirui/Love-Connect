import React, {useState, useEffect} from 'react'
import profile_background from '../assets/bg_profile.jpg'
import { countries } from '../utils/countries'


export default function Locations() {
    const [countryList, setCountryList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setCountryList(countries)
        setLoading(false)
    }, [])
    const LocationsHero = () => {
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
                <div className='mx-auto'>
                    <section className='flex flex-col items-center justify-center space-y-2'>
                        <div>
                            <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                                Popular Locations
                            </h1>
                        </div>
                        <div className="text-center px-8">
                            <h1 className='text-white text-2xl'>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.
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
            <LocationsHero />
        </div>
        <section className='m-4'>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {countryList?.map((country, index) => {
                    return(
                        <div
                            key={index}
                            className={`h-[200px] w-full bg-cover relative flex items-center rounded-lg`}
                            style={{
                                backgroundImage: `url(${country.cover_image})`
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-25 rounded-md"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className='mx-auto'>
                                    <a href={`/country/${country.slug}`} className="text-white font-semibold text-4xl hover:underline"> 
                                        {country.name} 
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    </div>
  )
}
