import React from 'react'

export const gallery = [
    {
        image: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80",
    },
    {
        image: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80",
    },
    {
        image: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80",
    },
    {
        image: "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80",
    },
]
export default function ProfileGallery() {
  return (
    <div className='p-4'>
        <section className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
                <div className='mb-2'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                        Catherine`s Gallery
                    </h1>
                </div>
                <div className='mb-2'>
                    <p className='text-lg leading-8 text-gray-600'>
                        Pellentesque quis dui varius, dapibus velit id, iaculis ipsum. 
                        Morbi ac eros feugiat, lacinia elit ut elementum turpis. Curabitur justo sapien, 
                        tempus sit amet rutrum eu, commodo eu lacus. Morbi in ligula nibh. 
                        Maecenas ut mi at odio hendrerit eleifend tempor vitae augue. 
                        Fusce eget arcu et nibh dapibus maximus consectetur in est.
                    </p>
                </div>
                <section className='my-2'>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {gallery?.map((picture, index) => {
                            return(
                                <div key={index}>
                                    <img 
                                        className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                                        src="https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80"
                                        alt="User Gallery" 
                                    />
                                </div>
                            )
                        })}
                        
                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}
