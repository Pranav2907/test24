import React from 'react'
import './services.css'

const Services = () => {
  return (
    <div id='services'>
      <h1 className='text-center mt-5 services-title'> We Provide ?</h1>

      <div className="container">
        <div className="row justify-content-between mt-5 ">
          <div className=" col-sm-5  p-5 service">
            <span className="cat">Design</span>
            <div>
              <img src="../../assets/images/design.png" className='service-img mt-5 ' alt="" />
              <p className="service-desc">We have expertise in design of automotive tools like Fixtures , Grippers Conveyor Tooling, Welding cells.In addition we support 3D conversion, 2D detailing and developing.</p>
            </div>
          </div>

          <div className=" col-sm-5 manufacturing  p-5 service">
            <span className="cat">Manufacturing</span>
            <div>
              <img src="../../assets/images/Manufacturing.png" className='service-img mt-5' alt="" />
              <p className="service-desc">We have designed chain of support partners in manufacturing, through this we can provide manufacturing services, including assembly to our customers.Best quality & Timely Delivery is our first priority.</p>
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center ">
          <div className=" col-sm-5  p-5 service">
            <span className="cat">SPM</span>
            <div>
              <img src="../../assets/images/SPM.png" className='service-img mt-5' alt="" />
              <p className="service-desc">Our team at Robotomic is capable to develop various Special Purpose Machines(SPM) to fulfill requirement of online /offline testing.</p>
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-between">
          <div className=" col-sm-5  p-5 service">
            <span className="cat">3D Printing</span>
            <div>
              <img src="../../assets/images/3D Printing.png" className='service-img mt-5' alt="" />
              <p className="service-desc">We offer the best quality FDM 3D Printing service with least turn around time. More than 8 FDM 3D Printers of various brands are present in-house at our support partner.We also offer services like SLS Process, SLA process, HP MJF Tech.</p>
            </div>
          </div>

          <div className=" col-sm-5 iot rounded-0 p-5 service">
            <span className="cat">IOT</span>
            <div>
              <img src="../../assets/images/iot.png" className='service-img mt-5' alt="" />
              <p className="service-desc">We have expert team to develop various tools & applications to make our industries capable to ride over the wave of current industrial revolution 4.0.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services