import React from 'react'
import './Contact.css'
import usgs from '../../assets/usgs.jpg'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={usgs} alt=''/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am courrently available to take on new project , so feel free to send me message  about anything that you want me to work on . You can conatat anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>dev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                     <img src={call_icon} alt="" /> <p>8181010606</p>  
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>124 chaitam line prayagraj</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                <button type ='submit' className="contact-submit">Submit now</button>

            </form>
        </div>

    </div>
  )
}

export default Contact