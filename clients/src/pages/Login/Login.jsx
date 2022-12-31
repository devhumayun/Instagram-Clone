import React from 'react'
import axios from 'axios'
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

const Login = () => {

  return (
    <>
        <div className="auth_container">
            
            <div className="login_wrapper">
              <a href="#" className="login_logo_link">
                <img className='login_logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
              </a>

              <form className="login_form">
                <input type="email" name="auth" className="login_input" placeholder='Phone number, username or email' />
                <input type="text" name="password" className="login_input" placeholder='Password' />
                <button className='submit_button'>Log in</button>
              </form>

              <div className="divider">
                  OR
                </div>

                <a href="#" className="login_with_fb"> <span className='fb_icon'> <AiFillFacebook /> </span> Log in with Facebook </a>

                <Link to="/forget-password" className="forget_password">Forget your password?</Link>

            </div>

            <div className="signup_wrapper">
              <span> Don't have an account? <Link to='/register'>  Sign up </Link> </span>
            </div>

            <div className="get_app_wrapper">
              <span> Get the app. </span>
              <div className="app_logo">
                <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /> </a>
                <a href="#"> <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /> </a>
              </div>
            </div>

        </div>
        <AuthFooter />
    </>
  )
}

export default Login