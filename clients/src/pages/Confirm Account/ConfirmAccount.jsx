import React from 'react'
import './ConfirmAccount.scss'

const ConfirmAccount = () => {

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

        <div className="confiram-account_section">
            <div className="forget_password_body">
                <div className="account-area">
                    <span className='reset-heading'> Help us confirm your own this account </span>
                    <span className='account-content'> You'll need to verify your identity to confirm you won this account.  </span>

                <div className='email-mobile-info'>
                        <div className="emailmobile-box">
                            <span className='lavel'> Email </span>
                            <span className='info'> humayun@gmail.com </span>
                            <span className='lavel'> Mobile </span>
                            <span className='info'> 01703872356 </span>
                        </div>
                        <div className="checkbox">
                            <input type="radio" />
                        </div>
                </div>
                </div>
                <div className="confirmation-code">
                <button> Send confirmation code </button>
            </div>
            </div>
        </div>
    </>

  )
}

export default ConfirmAccount