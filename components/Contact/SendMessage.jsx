import React from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


 

const SendMessage = () => {

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail','template_5tap4mp', e.target, 'pGtQ2llJof1wb31pl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    
    return (
        <div className='p-3'>
            <img src="../../assets/logos/robotomic.png" style={{ height: "80px" }} alt="" />

            <div className='mt-4'>
                <form onSubmit={sendEmail}>
                    <input type="email" className='send-message' placeholder='Your Email' name ="email" />

                    <textarea name="message" id="" cols="" rows="5"  className='send-message mt-4' placeholder='Your Message' ></textarea>

                    <button type = "submit" className=' send-button mt-4 p-2 justify-content-middle ' >Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default SendMessage