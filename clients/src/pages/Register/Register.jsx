import React from 'react';
import { BsXCircle, BsCheckCircle } from 'react-icons/bs';
import '../Login/Login.scss';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AiOutlineFacebook } from "react-icons/ai";
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { createToast } from '../../utility/toast';
import { register } from '../../Redux/Auth/action';


const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Show and Hide password
  const [ showPassword, setShowPassword ] = useState(false)

  // state for register field
  const [ input, setInput ] = useState({
    name : '',
    username : '',
    emailORmobile : '',
    password : ''
  });

  // update register input value
  const handleRegisterInput = (e) =>{
    setInput((preState) => ({
      ...preState,
      [e.target.name] : e.target.value
    }))
  };

  // Register form submit
  const handleRegisterForm = (e) => {
    e.preventDefault()

    if( !input.name || !input.username || !input.emailORmobile || !input.password ){
      createToast("All fields are requried")
    } else {
      
      dispatch(register({
         name : input.name,
         username : input.username,
         auth : input.emailORmobile,
         password : input.password
      },
        e, setInput,navigate
      ))
    }
    
  }


  const [fieldEdit, setFieldEdit] = useState({})
  // validation
  const [validation, setValidation] = useState({})
  const handleBlurValidation = (e) => {

    setFieldEdit((prev) => ({
      ...prev,
      [e.target.name] : true
    }))

    if(!e.target.value){
      setValidation((prev) => ({
        ...prev,
        [e.target.name]: true
      }))
    } else {
      setValidation((prev) => ({
        ...prev,
        [e.target.name] : false
      }))

    }
    
  }

  const handleFocusValidation = (e) => {
 
    setValidation((prev) => ({
      ...prev,
      [e.target.name] : false
    }))

    setFieldEdit((prev) => ({
      ...prev,
      [e.target.name] : false
    }))
  
  }

  return (

   
    <div className="auth_container">
            
      <div className="login_wrapper">
      <a href="#" className="login_logo_link">
          <img className='login_logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
        </a>

        <span className='signup_text'> Sign up to see photos and videos from your friends. </span>

        <a href="#" className="login_with_fb"> <span className='fb_icon'> <AiOutlineFacebook />  </span> Log in with Facebook </a>

        <div className="divider">
            OR
        </div>

        <form onSubmit={handleRegisterForm} className="login_form">
          
          {/* email or mobile */}
          <input name='emailORmobile' onBlur={handleBlurValidation} onFocus={handleFocusValidation}  value={input.emailORmobile} onChange={handleRegisterInput} type="text" className="login_input emailMobile" placeholder='Phone number or email address' />
          {
            validation.emailORmobile && <span className='emailMobileCross'> <BsXCircle /> </span>
          }
          <span className={`emailMobileCheck ${fieldEdit.emailORmobile && !validation.emailORmobile ? 'show' : ""}`}> <BsCheckCircle /> </span>
          
           
           {/* name */}
          <input name='name' value={input.name} onBlur={handleBlurValidation} onFocus={handleFocusValidation} onChange={handleRegisterInput} type="text" className="login_input" placeholder='Full Name' />
         {
          validation.name && <span className='nameCross'> <BsXCircle /> </span>
         }
          <span className={`nameCheck ${fieldEdit.name && !validation.name ? "show" : ""}`} > <BsCheckCircle /> </span>
          
         {/* username */}
          <input name='username' value={input.username} onBlur={handleBlurValidation} onFocus={handleFocusValidation} onChange={handleRegisterInput} type="text" className="login_input" placeholder='Username' />
          {
          validation.username &&   <span className="usernameCrose"> <BsXCircle /> </span>
         }
          <span className={`usernameCheck ${fieldEdit.username && !validation.username ? "show" : ""}`} > <BsCheckCircle /> </span>

         {/* password */}
          <input name='password' value={input.password} onBlur={handleBlurValidation} onChange={handleRegisterInput} onFocus={handleFocusValidation} type={ showPassword ? "text" : "password" } className="login_input"  placeholder='Password' />    
          {
          validation.password &&   <span className="passwordCrose"> <BsXCircle /> </span>
         }
          <span className={`passwordCheck ${fieldEdit.password && !validation.password ? "show" : ""}`} > <BsCheckCircle /> </span>
          {
            input.password && (<span className="showHidePassword" onClick={() => setShowPassword(preState => !preState)}> 
            { showPassword ? "Hide" : "Show" }
            </span>)
          }
          <div className="register_condition">
            <span> People who use our service may have uploaded your contact information to Instagram. <a href="#"> Learn more </a> </span>
            <span> By signing up, you agree to our <a href="#"> Terms </a>, <a href="#"> Privacy Policy </a> and <a href="#"> Cookies Policy </a>. </span>
          </div>
          <button type='submit' className='submit_button'>Sign up</button>
        </form>

      </div>

      <div className="signup_wrapper">
        <span> Have an account? <Link to={'/login'}> Login </Link> </span>
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

export default Register