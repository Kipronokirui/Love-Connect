import React from 'react'

export default function Login() {
  return (
    <div>
        <div className=''>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        LoveConnect    
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                        rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`} 
                                        placeholder="name@company.com" 
                                        required="" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 
                                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                                        w-full p-2.5`} 
                                        required="" 
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className={`w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 
                                    focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                    text-center`}
                                >
                                    Sign In
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Do not have an account? 
                                    <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Register here
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
