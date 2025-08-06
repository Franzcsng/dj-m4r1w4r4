import '../css/pages-style/About.scss'
import StyleCard from '../components/about/style-card.js';
import EventList from '../components/about/event-list.js';
import EventGallery from '../components/about/event-gallery.js'
import img_about from "../images/about/about_mrwra.JPG"

const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore';


const About = (img='../images/about/about_mrwra.JPG', djDesc='DJ m4riw4r4 - Chill cool', aboutBody=desc) => {
    return (
        <div className="about-main">
            <div className="about-section">
                <img src={img_about}></img>

                <div className="abt-txt">
                    <h1>A Bit About Me</h1>
                    <h4>{djDesc}</h4>
                    <p>{aboutBody}</p>
                </div>
            </div>

            <div className="about-divider">
                <p className="about-txt-divider">DJ, Mixer, Selector</p>
                <hr></hr>
            </div>

            <div className="about-section">
                <h2 className="abt-sub-header">Style</h2>
            
                <div className="abt-style-container">
                <StyleCard style='KPOP'/>
                <StyleCard style='KPOP'/>
                <StyleCard style='KPOP'/>
                
                
                

                </div>
            </div>

             <div className="about-divider">
                <hr></hr>
            </div>

            <div className="about-section gallery"> 
                <h2 className="abt-sub-header">Where I've Been</h2>

                <EventGallery/>
                <EventList/>

            </div>
            
            
        </div>
    )
} 

export default About; 