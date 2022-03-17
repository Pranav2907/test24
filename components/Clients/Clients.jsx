import React from 'react'
import './clients.css'

const Clients = () => {
  return (
    <div id='clients'>
      <h1 className="text-center mt-5 clients-title">Our Clients</h1>

      <div className="container">
        <div className="row d-flex mt-5 justify-content-between">
          <img src="../../assets/logos/Igem.svg" alt="" className='igem' />
          <img src="../../assets/logos/evk.svg" alt="" className='evk' />
          <img src="../../assets/logos/Eams.svg" alt="" className='eams' />
        </div>
      </div>
    </div>
  )
}

export default Clients