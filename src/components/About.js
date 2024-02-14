import React from 'react'
import profile_background from '../assets/bg_profile.jpg'
import { FaSearch } from "react-icons/fa";
import about_image from "../assets/about.png"
import { MdPersonSearch } from "react-icons/md";
import { IoIosCompass } from "react-icons/io";

export const reasons = [
    {
        title:"Simple to Use",
        explanation:"GO is very easy to use - just choose your and your partner’s gender, age, and location, and you’re all set!",
        icon:<MdPersonSearch />
    },
    {
        title:"Smart Matching",
        explanation:"Our matching system is based on geolocation and interests. It helps you find the best people to meet or spend time with.",
        icon:<IoIosCompass />
    },
    {
        title:"Cool Community",
        explanation:"Besides being #1 dating service, we have a supportive and understanding community that’s always ready to help.",
        icon:<IoIosCompass />
    }
]

export default function About() {
    const AboutHero = () => {
        return(
            <div 
                className='relative overflow-hidden flex items-center'
                style={{
                    backgroundImage: `url(${profile_background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                }}
            >
                <div className='mx-auto'>
                    <section className='flex flex-col items-center justify-center space-y-2'>
                        <div>
                            <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                                About Us
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
            <AboutHero />
        </div>
        <section className='m-6 px-8 flex items-center justify-center space-x-8'>
            <div>
                <div className='mb-2'>
                    <h1 className='text-gray-800 text-2xl font-semibold'>
                        About Us 
                    </h1>
                </div>
                <div className='mb-2'>
                    <h3 className='text-gray-700 text-xl font-light'>
                        We are here to build emotions, connect peopleand create happy stories.
                    </h3>
                </div>
                <div className='mb-2'>
                    <h3 className='text-gray-600 text-lg font-light'>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </h3>
                </div>
                <div>
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
            </div>
            <div>
                <img src={about_image} alt="About Us" />
            </div>
        </section>
        <section className='bg-gray-200 px-16 py-8 grid grid-cols-3 gap-4 border-b border-gray-400'>
            {reasons?.map((reason) => {
                return(
                    <div>
                        <div className='mb-2'>
                            {reason.icon && 
                                <span className='text-purple-600 text-4xl font-bold'>
                                    {reason.icon}
                                </span>
                            }
                        </div>
                        <div className='mb-2'>
                            {reason.title && 
                                <h1 className='text-gray-800 text-2xl font-semibold'>
                                    {reason.title}
                                </h1>
                            }
                        </div>
                        <div className='mb-2'>
                            {reason.explanation && 
                                <p className='text-gray-600 text-lg font-light'>
                                    {reason.explanation}
                                </p>
                            }
                        </div>
                    </div>
                )
            })}
        </section>
    </div>
  )
}
