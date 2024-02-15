import React from 'react'
import image from '../assets/bg_home.jpg'
import FilterForm from './FilterForm';

export default function Hero({profileFilter}) {
  return (
    <div>
        <div 
            className='relative overflow-hidden'
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '700px',
            }}
        >
            <div className='pl-8 pt-40 text-white'>
                <h1 className='text-6xl font-bold mb-4'>
                    New Places, <br/>Unforgettable Dating.
                </h1>
                <p className='text-xl'>
                    Still looking for your significant other? Love Connect is the place for you!<br/> 
                    Join us now to meet single men and women across the world.
                </p>
            </div>
            <section className='absolute bottom-0 left-0 right-0' style={{ width: '100%' }}>
                <div className='mx-4 bg-white'>
                    <FilterForm profileFilter={profileFilter} />
                </div>
            </section>
        </div>
    </div>
  )
}
