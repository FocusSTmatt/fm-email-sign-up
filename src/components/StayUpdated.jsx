import React from 'react'
import checkIcon from '../assets/images/icon-list.svg'
import '../styles/stayupdated.css'

function StayUpdated() {
  return (
    <div className='stay-updated-ctn'>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers 
            recieving monthly updates on.
        </p>
        <div className='bullet-ctn'>
            <div className='bullet'>
                <img src={checkIcon} />
                <p>Product discovery and building what matters</p>
            </div>
            <div className='bullet'>
                <img src={checkIcon} />
                <p>Measuring to ensure updates are a success</p>
            </div>
            <div className='bullet'>
            <img src={checkIcon} />
            <p>And much more!</p>
        </div>
        </div>
    </div>
  )
}

export default StayUpdated