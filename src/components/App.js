import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import Locations from './Locations';
import About from './About';
import Login from './Login';
import Register from './Register';
import CountryDetails from './CountryDetails';
import ProfilesList from './ProfilesList';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';

function App() {
 
  function success(pos) {
    var crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <main className='min-h-screen'>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="profiles" element={<ProfilesList />} />
              <Route path="profile/:id" element={<UserProfile />} />
              <Route path='locations' element={<Locations />} />
              <Route path='about' element={<About />} />
              <Route path='contact-us' element={<ContactUs />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='country/:slug' element={<CountryDetails />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    </BrowserRouter>
  )
}

export default App;