import '../css/pages-style/Events.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
//import { NavLink } from 'react-router-dom'
import EventCard from '../components/home/event-section.js'; 
import EventSlider from '../components/events/Event-Slider.js'
import EventBanner from '../components/events/Event-Banner.js'

const Evemts = () => {

    const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        });
    };
    const [eventList, setEventList] = useState([]);
    
        useEffect(() =>{
            axios.get("http://localhost:3001/events").then((response) =>{
                setEventList(response.data)
            })
        }, [])
    return(
        <div className='events-main'>
            <EventBanner/>

            <div className='events-section'>
                <div className='section-header'>
                    <h2>Upcoming Events</h2>
                </div>
                 <EventSlider/>
            </div>

            <div className='events-section'>
                <div className='section-header'>
                    <h2>Latest Gigs</h2>
                </div>

                <div className='events-list'>
                    {eventList.map((value, key) =>{
                        return(
                        <>
                            <EventCard 
                        title= {value.eventName}
                        address={value.eventAddress}
                        desc="The Aurora Night Festival lit up the heart of the city with a dazzling fusion of lights, music, and community spirit. As the sun dipped below the skyline, strings of colorful lanterns illuminated the streets, guiding visitors toward the central plaza. Local artisans showcased their creations infhdrhdnb"
                        date={formatDate(value.eventDate)}
                        time="9PM - 5AM"
                        />
                        </>
                        

                        
                       
                        )
                    })}
                </div>
               
            </div>
        </div>
    )
}

export default Evemts