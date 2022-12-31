import React from 'react';
import '../Login/Login.scss';
import { Link } from 'react-router-dom'
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import 'react-toastify/dist/ReactToastify.css';


const Birthday = () => {

  // day
  const month = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decmber" ]
    
  // month
  const  day = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31 ]

  // year
  const year = Array.from({ length: 110 }, (_, i) => new Date().getFullYear() - i);

  return (

   
    <div className="auth_container">
            
      <div className="login_wrapper">
        <a href="#" className="birthday-logo">
          <img className='birth-logo' src="https://i.pinimg.com/originals/44/93/3c/44933c00f4174c6a390692f121162e8d.png" alt="" />
        </a>
        <span className='add-date-of-birth'> Add your date of birth </span>
        <span className='public-profile'> This won't be part of your public progile </span>
        <span className='why-need-birthdate'> Why do I need to provide my birth of  date? </span>

        <form action="" className='selecet-form-box'>

            <select name="month" id="">
              {
                month.map((item,index) => 
                <option value={item} key={index}>
                  {item}
                  </option>
                )
              }
            </select>
            <select name="day" id="">
              {
                day.map((item,index) => 
                  <option value={item} key={index}>
                    {item}
                    </option>
                )
              }
            </select>
            <select name="" id="">
              {
                year.map((item,index) => 
                  <option value={item} key={index}>
                    {item}
                  </option>
                )
              }
            </select>

            <span className='where-born'> You need to enter the date where you were born on </span>
            <span className='something-else'> Use your won date of birth, even if this account for a business, pet for something else </span>

            <button className='submit-button' type='submit'> Next </button>

        </form>

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

export default Birthday