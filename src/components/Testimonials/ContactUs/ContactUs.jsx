import location_icon from '../../../assets/location-icon.png'
import mail_icon from '../../../assets/mail-icon.png'
import msg_icon from '../../../assets/msg-icon.png'
import call_icon from '../../../assets/phone-icon.png'
import white_arrow from '../../../assets/white-arrow.png'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact-us'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                 <li><img src={call_icon} alt="" />+1 123-456-7890</li>
                  <li> <img src={location_icon} alt="" />C77 Massachusetts Ave,<br/> Cambridge
MA 02139, United States</li>
            </ul>
        </div>
         <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name="name" placeholder= "Enter your name" required />
                              <label>Phone Number</label>
                <input type="tel" name="phone" placeholder= "Enter your mobile number" required />
                              <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
                <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>sending</span>
         </div>
    </div>
  )
}

export default ContactUs