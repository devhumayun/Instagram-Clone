import React from 'react'
import './ForgetPassword.scss'

const AccountInfo = () => {

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

        <div className="forget_password_section mt">
        <div className="forget_password_body">
            <div className="account-area">
                <span className='account-heading'> Is your profile information correct? </span>
                <span className='account-content'> We detected unusual activites on your account. For your security. Please let us known if your profile information is correct </span>

                <div className="info">
                    <span> Username </span>
                    <strong> humayun </strong>
                </div>
                <div className="info">
                    <span> Email </span>
                    <strong> humayun@gmail.com </strong>
                </div>
                <div className="info">
                    <span> Phone Number </span>
                    <strong> no phone number </strong>
                </div>
            </div>
        </div>
        <div className="reacaptcha-footer">
            <a className='secure-my-account' href="#"> No, secure my account </a>
            <a className='yes-correct' href="#"> Yes, it's corrent </a>
        </div>

    </div>
    </>

  )
}

export default AccountInfo