import '../css/pages-style/Contact.scss';
import background from '../images/about/about_mrwra.JPG';
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';

const Contact = () =>{
    return(
        <div className="contact-main">

            <img id ='contact-bg' src={background}></img>
            
            <div className='contact-section'>

                <div className='contact-box'>
                    <h2>Contact me.</h2>
                    <p>For bookings, collaborations, media inquiries, or just good vibes — drop a message and I’ll get back to you. Let’s make something unforgettable together.</p>
                    <p>091341451234</p>
                    <p>vinclang@gmail.com</p>
                </div>


                <div className="socials-container">
                     <div className="social">
                        <InstagramIcon className='icon'/>
                        <p>m4riw4r4</p>
                    </div>

                    <div className="social">
                        <FacebookIcon className='icon'/>
                        <p>m4riw4r4</p>
                    </div>

                    <div className="social">
                        <p>m4riw4r4</p>
                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default Contact;