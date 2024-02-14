import React from 'react'
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

function App() {
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