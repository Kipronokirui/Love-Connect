import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { countries } from '../utils/countries';

export default function FilterForm({profileFilter}) {
    const [formData, setFormData] = useState({
        myGender: '',
        interestedInGender: '',
        minimumAge: 0,
        maximumAge: 0,
        // country: countries[0].name,
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:');
        profileFilter(formData)
        console.log("Profile filter called from FilterForm")
    };
  return (
    <div className='p-4 w-max-full flex justify-center border'>
        <form className='min-w-full' onSubmit={handleSubmit}>
            <section className='flex justify-center items-center space-x-6'>
                <div>
                    <label htmlFor="myGender" className="block text-lg font-medium leading-6 text-gray-900">
                        I am
                    </label>
                    <div className='mt-2'>
                        <select 
                            name="myGender"
                            value={formData.myGender} 
                            onChange={handleInputChange} 
                            className={`block w-36 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 text-xl font-semibold
                            sm:max-w-xs sm:text-sm sm:leading-6`}
                        >
                            <option value="">Select Gender</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                            <option value={'Non Binary'}>Non Binary</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="interestedInGender" className="block text-lg font-medium leading-6 text-gray-900">
                        Looking For
                    </label>
                    <div className='mt-2'>
                        <select 
                            name="interestedInGender"
                            value={formData.interestedInGender} 
                            onChange={handleInputChange} 
                            className={`block w-36 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 text-xl font-semibold
                            sm:max-w-xs sm:text-sm sm:leading-6`}
                        >
                            <option value="">Select Gender</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                            <option value={'Non Binary'}>Non Binary</option>
                        </select>
                    </div>
                </div>
                <section>
                    <label htmlFor="minimumAge" className="block text-lg font-medium leading-6 text-gray-900">
                        Age
                    </label>
                    <div className='flex items-center space-x-4'>
                        <div>
                            <div className='mt-2'>
                                <select 
                                    name="minimumAge"
                                    value={formData.minimumAge} 
                                    onChange={handleInputChange} 
                                    className={`block w-28 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                                    ring-inset ring-gray-300 text-xl font-semibold
                                    sm:max-w-xs sm:text-sm sm:leading-6`}
                                >
                                    <option value="">Minimum Age</option>
                                    {Array.from({ length: 13 }, (_, index) => (
                                        <option key={index + 18} value={index + 18}>
                                            {index + 18}
                                        </option>
                                    ))}
                                    {/* <option value={18}>18</option>
                                    <option value={20}>20</option>
                                    <option value={22}>22</option>
                                    <option value={24}>24</option>
                                    <option value={26}>26</option> */}
                                </select>
                            </div>
                        </div>
                        <div className="border-b-2 border-solid border-gray-500 w-8 h-2"></div>
                        <div>
                            <div className='mt-2'>
                                <select 
                                    name="maximumAge"
                                    value={formData.maximumAge} 
                                    onChange={handleInputChange}  
                                    className={`block w-28 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                                    ring-inset ring-gray-300 text-xl font-semibold
                                    sm:max-w-xs sm:text-sm sm:leading-6`}
                                >
                                    <option value="">Maximum Age</option>
                                    {Array.from({ length: 13 }, (_, index) => (
                                        <option key={index + 18} value={index + 18}>
                                            {index + 18}
                                        </option>
                                    ))}
                                    {/* <option value={18}>18</option>
                                    <option value={20}>20</option>
                                    <option value={22}>22</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <label htmlFor="country" className="block text-lg font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className='mt-2'>
                        <select 
                            name="country"
                            value={formData.country} 
                            onChange={handleInputChange}  
                            className={`block w-40 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 text-xl font-semibold
                            sm:max-w-xs sm:text-sm sm:leading-6`}
                        >
                            <option value="">Select Country</option>
                            {countries?.map((country, index) => {
                                return(
                                    <option 
                                        key={index}
                                        value={country.name}
                                    >
                                        {country.name}
                                    </option>
                                )
                            })}
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
