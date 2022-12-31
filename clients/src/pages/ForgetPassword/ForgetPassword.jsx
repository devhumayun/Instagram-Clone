import React from 'react'
import './ForgetPassword.scss'
import { FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import AuthFooter from '../../components/AuthFooter/AuthFooter';


const ForgetPassword = () => {

  return (
    
    <div className="forget_password_section">
        <div className="header">
            <a href="#">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
            </a>
        </div>
        <div className="forget_password_body">
            <div className="lock_box">
                <span> <FiLock /> </span>
            </div>
            <div className="content">
                <h4> Trouble with logging in? </h4>
                <span> Enter your email address, phone number or username, and we'll send you a link to get back into your account. </span>
            </div>
            <div className="recovery_form">
                <form method="POST">
                    <input name='email' type="text" className="email_field" placeholder='Emaill address, phone number or username' />
                    <button className='submit_btn'> Send Login Link </button>
                </form>
                <span className='cannt-reset'> Can't reset your password? </span>
            </div>
            <div className="divider">
                <span> OR </span>
            </div>
            <div className="create_account">
                <Link to="/register"> Create New Account </Link> 
            </div>
            <div className="login">
                <Link to="/login"> Back to Login </Link>
            </div>
        </div>
        <AuthFooter />
    </div>

  )
}

export default ForgetPassword