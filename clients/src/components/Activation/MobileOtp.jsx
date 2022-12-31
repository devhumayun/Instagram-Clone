import React from 'react';
import { Link } from 'react-router-dom'
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import 'react-toastify/dist/ReactToastify.css';


const MobileOtp = () => {


  return (

   
    <div className="auth_container">
            
      <div className="login_wrapper">
        <a href="#" className="birthday-logo">
          <img className='birth-logo' src="https://i.pinimg.com/originals/44/93/3c/44933c00f4174c6a390692f121162e8d.png" alt="" />
        </a>
        <span className='add-date-of-birth'> Add your date of birth </span>
        <span className='public-profile'> This won't be part of your public progile </span>
        <span className='why-need-birthdate'> Why do I need to provide my birth of  date? </span>

        <a className='go-back' href="#"> Go back </a>


      </div>

      <div className="signup_wrapper">
        <span> Have an account? <Link to={'/login'}>  Sign up </Link> </span>
      </div>

      <div className="get_app_wrapper">
        <span> Get the app. </span>
        <div className="app_logo">
          <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /> </a>
          <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /> </a>
        </div>
      </div>

      <AuthFooter />

    </div>
  )
}

export default MobileOtp