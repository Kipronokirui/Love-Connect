import React from 'react'
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
export default function WhyChoose() {
  return (
    <div>
        <section className='grid grid-cols-3 gap-4'>
            {reasons?.map((reason, index) => {
                return(
                    <div key={index}>
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
