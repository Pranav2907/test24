import React, { useState } from 'react';
import './contact.css'
import ContactUs from './ContactUs';
import SendMessage from './SendMessage';

const Contact = () => {
    const [message, setMessage] = useState(false)

    return (
        <div id='contact'>
            <h1 className='text-center mt-5  contact-title'>Contact Us</h1>

            <div className="container">
                <div className="d-flex row mt-5 justify-content-around">
                    <div className="col-sm-5 border contact-form rounded">{message ? <SendMessage /> : <ContactUs onClick={() => setMessage(true)} />}</div>
                    <div className=" col-sm-5 map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60524.46123013644!2d73.82632791184095!3d18.53889427385499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9ff81f1aae9%3A0x2560343555ac8b53!2sHadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1646910578114!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact