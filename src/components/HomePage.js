import React, {useState, useEffect} from 'react'
import Hero from './Hero'
import HomeProfiles from './HomeProfiles'
import WhyChoose from './WhyChoose'
import Countries from './Countries'
import { userProfiles } from '../utils/profiles'
import { countries } from '../utils/countries'

export default function HomePage() {
  const [profiles, setProfiles] = useState([])
  const [countryList, setCountryList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setProfiles(userProfiles)
    setCountryList(countries)
    setLoading(false)
  }, [])
  return (
    <div>
        <Hero />
        {loading ? (
          <h1>Please wait...</h1>
          ) : (
          <>
            <div>
                <HomeProfiles profiles={profiles} />
            </div>
            <div className='px-8 mx-4 my-4'>
                <WhyChoose />
            </div>
            <div className='px-8 mx-4 my-4'>
                <Countries countries={countryList} />
            </div>
          </>
        )}
    </div>
  )
}
