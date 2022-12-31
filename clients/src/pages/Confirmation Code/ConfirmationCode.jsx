import React from 'react'
import './ConfirmationCode.scss'

const ConfirmationCode = () => {

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
                    <span className='reset-heading'> Enter confirmation code </span>
                    <p> Enter 6 digit code we send to </p>
                    <strong> humayunkabir@gmail.com </strong>
                    <span className='code-receive'> It may take up to a minute to receive the code  </span>

                <div className='email-mobile-info'>
                    <form className='confirmation-box'>
                        <input className='code-box' type="text" />
                        <button type='submit'> Send confirmation code </button>
                    </form>
                </div>
                </div>
                <div className="confirm">
                <a href="#"> Get a new code </a>
            </div>
            </div>
        </div>
    </>

  )
}

export default ConfirmationCode