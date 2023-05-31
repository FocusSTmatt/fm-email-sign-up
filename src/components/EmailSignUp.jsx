import React, {useState} from 'react'
import '../styles/emailsignup.css'

function EmailSignUp({isClicked, setIsClicked, userEmail, setUserEmail}) {
  const [buttonClick, setButtonClick] = useState(false)
  function onChange(event) {
    setUserEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userEmail)
    setIsClicked(!isClicked);
  }
  function handleClick() {
    setButtonClick(!buttonClick)
    console.log(buttonClick)
  }

  function toggleInputButtonClass(){
    if(userEmail){
      return "submit-btn active"
    } else {
      return "submit-btn"
    }
  }

  return (
    <div className='email-ctn'>
      <form 
        className='email-form'
        onSubmit={handleSubmit}>
        <div className='label-ctn'>  
        <label>Email Address</label>
        {buttonClick && !isClicked ? <p>Valid email required</p> : null}
        </div>
        <input
          className='text-input'
          onChange={onChange}
          type="email"
          placeholder='email@company.com'
          required
          style={buttonClick && !isClicked 
          ? {background: "rgb(249, 224, 224)", 
          border: "2px solid red", color: "red"} 
          : {background: "#fff"}} 
        />
        <input 
          className={toggleInputButtonClass()}
          type="submit"
          onClick={handleClick}  
          onSubmit={handleSubmit}
          value="Subscribe to monthly newsletter"
        />   
      </form>
    </div>
  )
}

export default EmailSignUp