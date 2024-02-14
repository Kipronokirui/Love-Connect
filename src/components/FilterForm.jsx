import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function FilterForm() {
  return (
    <div className='p-4 w-max-full flex justify-center border'>
        <form className='min-w-full'>
            <section className='flex justify-center items-center space-x-6'>
                <div>
                    <label for="gender" class="block text-lg font-medium leading-6 text-gray-900">
                        I am
                    </label>
                    <div className='mt-2'>
                        <select 
                            name="gender" 
                            className={`block w-36 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 text-xl font-semibold
                            sm:max-w-xs sm:text-sm sm:leading-6`}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non Binary</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label for="lookingFor" class="block text-lg font-medium leading-6 text-gray-900">
                        Looking For
                    </label>
                    <div className='mt-2'>
                        <select 
                            name="lookingFor" 
                            className={`block w-36 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 text-xl font-semibold
                            sm:max-w-xs sm:text-sm sm:leading-6`}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non Binary</option>
                        </select>
                    </div>
                </div>
                <section>
                    <label for="age" class="block text-lg font-medium leading-6 text-gray-900">
                        Age
                    </label>
                    <div className='flex items-center space-x-4'>
                        <div>
                            <div className='mt-2'>
                                <select 
                                    name="minimumAge" 
                                    className={`block w-28 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                                    ring-inset ring-gray-300 text-xl font-semibold
                                    sm:max-w-xs sm:text-sm sm:leading-6`}
                                >
                                    <option>18</option>
                                    <option>20</option>
                                    <option>22</option>
                                </select>
                            </div>
                        </div>
                        <div class="border-b-2 border-solid border-gray-500 w-8 h-2"></div>
                        <div>
                            <div className='mt-2'>
                                <select 
                                    name="maximumAge" 
                                    className={`block w-28 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                                    ring-inset ring-gray-300 text-xl font-semibold
                                    sm:max-w-xs sm:text-sm sm:leading-6`}
                                >
                                    <option>26</option>
                                    <option>28</option>
                                    <option>30</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <label for="country" class="block text-lg font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className='mt-2'>
                        <select 
                            name="country" 
                            className={`block w-40 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 text-xl font-semibold
                            sm:max-w-xs sm:text-sm sm:leading-6`}
                        >
                            <option>USA</option>
                            <option>Canada</option>
                            <option>UK</option>
                            <option>Ireland</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className='mt-6'>
                        <button 
                            type='submit' 
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
            </section>
        </form>
    </div>
  )
}
