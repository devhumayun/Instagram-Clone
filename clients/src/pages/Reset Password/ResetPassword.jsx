import React from 'react'
import './ResetPassword.scss'

const ResetPassword = () => {

  return (
    <>
        <div className='tobbar_container'>
            <div className="tobbar_wrapper">
                <div className="logo">
                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
                </div>
                <div className="tobbai_menu">
                    <span className='another-account'> Login to another account </span>
                </div>
            </div>
        </div>

        <div className="forget_password_section">
        <div className="forget_password_body">
            <div className="account-area">
                <span className='reset-heading'> Change your password to secure your account </span>
                <span className='account-content'> Since you said this wasn't you. update your password to keep your account safe. You'll be logged out of all sessions except this one. so anyone trying to get into your account will no longer have access </span>

               <form action="">
                    <input type="password" className='reset-password' placeholder='New password' />
                    <input type="password" className='reset-password' placeholder='New password again' />
                    <button className='reset-submit' type='submit'> Submit </button>
               </form>
            </div>
        </div>

    </div>
    </>

  )
}

export default ResetPassword