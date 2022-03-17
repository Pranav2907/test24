import React from 'react'
import './contact.css'

const ContactUs = (props) => {
    return (
        <div className='p-3' {...props}>
            <img src="../../assets/logos/robotomic.png" style={{ height: "80px" }} alt="" />

            <div className='mt-4'>
                <form action="">

                    <h4>Reg. Office - FL A/3, Shivshrushti Soc. S.No. 4/6A Maruti Mandir Lane, Hadapsar, Pune, 411028.</h4>

                    <button  className=' send-button mt-4 p-2 justify-content-middle '>Contact Us</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs