import React, {useState} from 'react'

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirm_password: '',
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
        console.log('Form submitted with:', formData);
    };
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
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
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
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••" 
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 
                                        sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                                        w-full p-2.5`} 
                                        required="" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input 
                                        type="confirm-password" 
                                        name="confirm-password" 
                                        id="confirm-password"
                                        value={formData.confirm_password}
                                        onChange={handleInputChange} 
                                        placeholder="••••••••" 
                                        className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                        rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`} 
                                        required="" 
                                    />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                            I accept the 
                                            <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" 
                                                href="#!"
                                            >
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    className={`w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 
                                    focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                    text-center`}
                                >
                                    Sign Up
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? 
                                    <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Login here
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
