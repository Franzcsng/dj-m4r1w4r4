import '../../css/components-style/home/event-section.scss';
import img from '../../images/banner/hero_1.jpg';
import { useState } from 'react';


const EventCard = (prop) => {
    const [more, setMore] = useState(false);
    const toggleShowMore = () => setMore((state) => !state) 
    
    let eventTitle = prop.title;
    let eventImg = prop.img;
    let eventAddress = prop.address;
    let eventDescription = prop.desc;
    let eventDate = prop.date;
    let eventTime = prop.time;
    let customClass = prop.customClass;

    const preview = eventDescription ? eventDescription.slice(0, 295) : '';

    return (
        <>
            
            <div className={`event-container ${customClass}`}>
                
                <img src={eventImg}></img>

                <div className="event-overlay">
                    <div className="event-grid">
                        <div className='event-grid-child'>
                            <h1 className="event-title">{eventTitle}</h1>
                            <p className="event-location">{eventAddress}</p>
                            <hr></hr>
                        </div>
                        
                        <div className='event-grid-child'>
                            <p className="event-description">
            
                                {eventDescription.length > 295 ? `${preview} ...` : eventDescription}
                            </p>
                        </div>
                        
                         <div className='event-grid-child'>
                            <p className="event-date">{`${eventDate} | ${eventTime}`}</p>  
                        </div>
                    </div>

                    <div className="event-btns">
                        <button>View More</button>
                    </div>  
                </div>

            </div>
       
        </>
    )
}

export default EventCard;