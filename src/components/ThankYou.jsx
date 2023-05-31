import React from 'react'
import '../styles/thankyou.css'
import checkIcon from '../assets/images/icon-list.svg'

function ThankYou({isClicked, userEmail}) {
    
    
  return (
    <div 
        className='thank-you-ctn'
        style={!isClicked ? {display: "none"} : {display: "flex"}}
    >
    <div className='thank-you-flex'>   
        <img className='thank-you-check' src={checkIcon} />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>{userEmail}</b>. Please 
        open it and click the button inside to confirm your subscription.</p>
        <button>Dismiss message</button>
    </div>    
    </div>
  )
}

export default ThankYou