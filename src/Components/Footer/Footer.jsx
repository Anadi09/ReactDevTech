import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.jpg'
import mail_icon from '../../assets/mail_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt='' />
                <p>I am fullstact Developer from, Delhi,Noida,Banglore,Haydrabad India 7+ years of developing field</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={mail_icon} alt='' />
                    <input type='email' placeholder='Enter your email' />                    
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
           <p className="footer-bottom-left">&copy; 2025 Anadiinfotech. All right reserved</p>
           <div className="footer-bottom-right">
            <p>Term Of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
           </div>
        </div>
        
    </div>
  )
}

export default Footer