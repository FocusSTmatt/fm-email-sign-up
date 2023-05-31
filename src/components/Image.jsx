import signUpMobileImage from '../assets/images/illustration-sign-up-mobile.svg'
import signUpDesktopImage from '../assets/images/illustration-sign-up-desktop.svg'
import MediaQuery from "react-responsive";
import '../styles/image.css'

function Image() {
    return (
        <>
        <div className='img-ctn'>
            <MediaQuery query='(min-width: 768px)'>
                <img 
                    src={signUpDesktopImage} 
                    className='desktop-signup-image' 
                />
            </MediaQuery>
            <MediaQuery query='(max-width: 768px)'>
                <img 
                    src={signUpMobileImage} 
                    className='mobile-signup-image' 
                />
            </MediaQuery>
        </div>
        </>
    )
}

export default Image