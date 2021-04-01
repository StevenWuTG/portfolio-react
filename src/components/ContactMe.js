import React from 'react'
import emailjs from 'emailjs-com'
const ContactMe = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('Gmail', 'template_aqdx4iw', e.target, 'user_9g8wroGHVK37aC43tSjIw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert("message sent")
          e.target.reset()
    }

    return (
        <div className="contact-me form-box">
            
            <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Subject:</label>
            <input type="text" name="subject" />
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input className="btn btn-primary"  type="submit" value="Send" />
            </form>

        
        </div>
    )
}

export default ContactMe
