import '../../css/components-style/events/Event-Banner.scss'
import {NavLink} from 'react-router-dom';
import aboutImg from '../../images/about/about_mrwra.JPG';

const EventBanner = () => {
    return (
        <div className='event-banner-main'>
            <img>
            
            </img>
            <div className='banner-overlay'>
                <div className='banner-content'>

                    <div className='content-header'>
                        <div className='event-info'>
                            <h1>My Latest Gigs</h1>
                            <h2 className='event-title'> Fright Night</h2>

                            <p className='event-desc'>Lorem incididunt import iasd proident Lorem labore Lorem incididunt import iasd proident Lorem labore Lorem incididunt import iasd proident Lorem labore</p>
                            <p className='event-date'>October 12, 2025 | 9:00PM onwards</p>
                        </div>

                        <p className='view-btn'> view more </p>
                    
                    </div>
                    <img className='event-poster' src={aboutImg}></img>
                </div>
            </div>
        </div>
    )
}

export default EventBanner