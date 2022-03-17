import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className="row mt-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 mt-4  ">
                            <a href="/"><img src="../../assets/logos/robotomic.png" alt="" className='footer-img' /></a>
                        </div>
                        <div className="col-sm-3 mt-4 ">
                            <h5>About US</h5>
                            <div className='col mt-4'>
                                <a href="#whyus" className='footer-links'>Why Us ?</a> <br /><br />
                                <a href="#services" className='footer-links'>We Provide</a> <br /><br />
                                <a href="#services" className='footer-links'>Services</a> <br /><br />
                                <a href="#clients" className='footer-links'>Clients</a> <br /><br />
                            </div>
                        </div>
                        <div className="col-sm-3 mt-4 ">
                            <h5>Social Media</h5>
                            <div className='col mt-4'>
                                <a href="" className='footer-links'>Facebook</a> <br /><br />
                                <a href="" className='footer-links'>Twitter</a> <br /><br />
                                <a href="" className='footer-links'>Instagram</a> <br /><br />
                            </div>
                        </div>
                        <div className="col-sm-3 mt-4 ">
                            <h5>Contact US</h5>
                            <div className='col mt-4'>
                                <a href="mailto:info@robotomic.com" className='footer-links'>info@robotomic.com</a> <br /><br />
                                <a href="tel:+91 9890378759" className='footer-links'>+91 9890378759</a> <br /><br />
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="mt-4">
                        <h5>&copy; All rights reserved to Robotomic Solutions LLP.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer