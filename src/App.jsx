import { useState } from 'react'
import './App.css'
import Image from './components/Image'
import StayUpdated from './components/StayUpdated'
import EmailSignUp from './components/EmailSignUp'
import ThankYou from './components/ThankYou'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  return (
    <>
    <div 
      className='outter-ctn-subscribe'
      style={!isClicked ? { display: "flex" } : { display: "none"}}
    >
      <Image />
      <div className='sign-up-ctn'>
        <StayUpdated />
        <EmailSignUp
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          userEmail={userEmail}
          setUserEmail={setUserEmail} />
      </div>
      <div className='outter-ctn-thank-you'>
        
      </div>  
    </div>

    <div className='outter-ctn-thank-you'>
      <ThankYou 
        userEmail={userEmail} 
        isClicked={isClicked}
      />
    </div>
    </>
    
  )
}

export default App
