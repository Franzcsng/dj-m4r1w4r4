import '../../css/components-style/home/about-home.scss';
import aboutImg from '../../images/about/about_mrwra.JPG';
const AboutHome = () => {

    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    
    return (
        <div className="about-home-card">
            <div className="img-container"> 
                <img src={aboutImg}></img>
            </div>
            
            <div className="about-home-text">
                <h1>About Me</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default AboutHome;