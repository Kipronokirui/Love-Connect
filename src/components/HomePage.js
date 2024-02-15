import React, {useState, useEffect} from 'react'
import Hero from './Hero'
import HomeProfiles from './HomeProfiles'
import WhyChoose from './WhyChoose'
import Countries from './Countries'
import { userProfiles } from '../utils/profiles'
import { countries } from '../utils/countries'
// Object { myGender: "", interestedInGender: "", minimumAge: 18, maximumAge: 35, country: "" }
export default function HomePage() {
  const [profiles, setProfiles] = useState([])
  const [originalProfiles, setOriginalProfiles] = useState([]);
  const [countryList, setCountryList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setOriginalProfiles(userProfiles);
    setProfiles(userProfiles)
    setCountryList(countries)
    setLoading(false)
  }, [])

  const filterProfiles = (filterData) => {
    console.log("Profile Filter called with", filterData);

    let filteredProfiles = originalProfiles.filter((profile) => {
      // Check if interestedInGender is provided and if the genders match
      const genderCondition =
        !filterData.interestedInGender || profile.gender === filterData.interestedInGender;
  
      // Check if minimumAge and maximumAge are provided and if the age is within the range
      const ageCondition =
        (!filterData.minimumAge || profile.age >= filterData.minimumAge) &&
        (!filterData.maximumAge || profile.age <= filterData.maximumAge);
  
      // Check if the country matches
      const countryCondition = !filterData.country || profile.country === filterData.country;
  
      // Combine all conditions
      return genderCondition && ageCondition && countryCondition;
    });
    // let filteredProfiles = originalProfiles.filter((profile) => {
    //   return (
    //     (!filterData.country || profile.country === filterData.country)
    //   );
    // });
    setProfiles(filteredProfiles);
  };

  const handlePagination = () => {
    console.log("Pagination button clicked")
  }

  return (
    <div>
        <Hero profileFilter={filterProfiles}/>
        {loading ? (
          <h1>Please wait...</h1>
          ) : (
          <>
            <div className='border-b-2'>
                <HomeProfiles profiles={profiles} handlePagination={handlePagination} />
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
