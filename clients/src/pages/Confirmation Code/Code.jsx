import React from 'react'
import './ConfirmationCode.scss'

const Code = () => {

  return (
    <>

        <div className="confiram-account_section">
            <div className="forget_password_body">
                <div className="account-area">
                    <img src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg" alt="" />
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
                <a href="/"> Get a new code </a>
            </div>
            </div>
        </div>
    </>

  )
}

export default Code