import '../css/components-style/footer.scss'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="footer-socials">
                <FacebookIcon className="social-icon"/>
                <InstagramIcon className="social-icon"/>
            </div>

            <div className="footer-bottom">
                <p>M4R1W4R4</p>
                <p>|</p>
                <p>WEBSITE DESIGN BY <span>NORMANIZE</span></p>
            </div>
            
        </div>
    )
}

export default Footer;