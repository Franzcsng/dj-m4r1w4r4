
import '../../css/components-style/home/Hero-banner.scss';
import img1 from '../../images/banner/hero_1.jpg';
import img2 from '../../images/banner/banner_dj.png';


function Hero (){
    return (
        <>
        <div className="hero-banner">
            <img className="hero-img" src={img1} alt="banner"></img>
            <div className="hero-overlay">

                <div className="hero-overlay-container">
                    
                    <img src={img2} alt="m4r1w4r4"></img>

                    <div className="dj-info">
                        <h1 className="dj-name">m4r1w4r4</h1>
                        <h3>Professional Dj from the Philippines</h3>
                        <p>m4r1w4r4 (aka Vinc Lang) is a Bacolod-based DJ and selector shaped by internet digging culture, known for intuitive, genre-fluid sets guided by the energy of the space and a deep curiosity for overlooked sounds.</p>

                        <button>Contact Us<div></div></button>
                    </div>

                </div>
                 
            </div>
          
        </div>

        
        </>
    );
}

export default Hero;
