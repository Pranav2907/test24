import React from 'react';
import './home.css';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <div id='#home'>
            <div className='header'>
                <img src="../assets/images/Robot Image.png" className='' alt="" />
                <div className="text-block">
                    <p className="headerTitle">
                        <Typewriter
                            words={['Your Trusted Partner',
                                'In Industrial Automation']}
                            loop={true}
                            cursor
                            cursorStyle=' | '
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </p>

                    <h5 className="headerSubTitle">Robotomic Solutions LLP is a collaboration of experienced engineering <br />
                        experts from different core areas of modern day industrial automation.
                    </h5>

                    <a href="#about"><button className=' header-button '>Discover</button></a>
                </div>
            </div>

            <div className="container" id='about'>
                <h3 className="text-center home-text mt-5 lh-lg">
                    We are one stop solution provider for industrial automation <br />
                    right from design, manufacturing & actual day to day <br />
                    production data handling for the management to achieve <br />
                    current industrial revolution 4.0.
                </h3>
            </div>

            <h1 className="why-us text-center mt-5" id='whyus'>Why Us ?</h1>

            <div className="d-flex row justify-content-around mt-5">
                <div className="col-sm-3 border why-vision">
                    <div className="container">
                        <div className="d-flex mt-4 row flex-row justify-content-center ">
                            <img src="../../assets/logos/Vission.svg" alt="" />
                            <h3 className="text-center mt-4 ml-3 why-title">Vision</h3>
                        </div>
                        <p className=' why-desc mt-4'>To become the most
                            trusted service brand
                            & one stop solution
                            for customers
                            objective to ride on
                            industrial revolution
                            wave by adding
                            values through our
                            services.
                        </p>
                    </div>
                </div>
                <div className="col-sm-3 mission border p-3 why-vision ">
                    <div className="container">
                        <div className="d-flex row  mt-4 flex-row justify-content-center ">
                            <img src="../../assets/logos/mission.svg" alt="" />
                            <h3 className="text-center mt-4 ml-3 why-title">Mission</h3>
                        </div>
                        <p className=' why-desc mt-4'>To develop a
                            footprints in industry
                            for long term with
                            innovative solutions,
                            high quality
                            products, following
                            the upcoming
                            technologies and
                            most reliable
                            services.
                        </p>
                    </div>
                </div>
                <div className="col-sm-3 border quality why-vision">
                    <div className="container">
                        <div className="d-flex mt-4 row  flex-row justify-content-center ">
                            <img src="../assets/logos/quality.svg" alt="" />
                            <h3 className="text-center mt-4 ml-3 why-title">Quality</h3>
                        </div>
                        <p className=' why-desc mt-4'>We are committed to
                            the continuous
                            improvement in our
                            product & services
                            through quality with
                            on time delivery &
                            passion of exiting the
                            customers about our
                            quality practices .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home 