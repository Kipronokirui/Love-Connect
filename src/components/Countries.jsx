import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Countries({countries}) {
    const Country = ({country}) => {
        return(
            <div 
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
    }
  return (
    <div className='flex items-center justify-center space-x-4'>
        <section className='w-2/3 px-8'>
            <div className='grid grid-cols-2 gap-4'>
                {countries.map((country, index) => (
                <div key={index}>
                    <Country country={country}/>
                </div>
                ))}
            </div>
        </section>
        <section className='w-1/3'>
            <div className='mb-2'>
                <h1 className='text-gray-800 text-2xl font-semibold'>
                    Meet Singles in Your Area
                </h1>
            </div>
            <div className='mb-2'>
                <p className='text-gray-600 text-lg font-light'>
                    If you want to meet 
                    local singles for dating, companionship, friendship or even more, 
                    you have come to the right place.
                </p>
            </div>
            <div className='mb-2'>
                <button 
                    className={`text-white bg-purple-700 hover:bg-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 me-2`}
                >
                    <div className='flex items-center space-x-2'>
                        <span>
                            <FaSearch className='w-4 h-4'/>
                        </span>
                        <span>
                            Find Your Partner
                        </span>
                    </div>
                </button>
            </div>
        </section>
    </div>
  )
}
