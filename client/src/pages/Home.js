import '../css/pages-style/Home.scss';
import Hero from '../components/home/Hero-banner.js';
import SoundCard from '../components/home/sound-card.js';
import EventCard from '../components/home/event-section.js';    
import AboutHome from '../components/home/about-home.js';
import MixCard from '../components/mixes/mix-card.js';
import img from '../images/banner/hero_1.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home(){
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
    })

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore "
    
    return (
        <>
        <div className="home-container">
            <Hero />
            
            <div className="home-section">

                <div className="home-text">
                    <h1>Beats by <span>m4r1w4r4</span></h1>
                    <a>SoundCloud</a>

                    <MixCard/>

                </div>

                <div className="sound-card-container">
                    {[...Array(4)].map((_, i) =>(

                        <SoundCard key={i} 
                        soundSrc='/sample.mp3' 
                        title='Crazy Times' 
                        address='Aces Bar' 
                        date='June 2, 2022'/>
                        
                    ))}
                </div>

            </div>

            <div className="home-event-section">

                <h1>Upcoming Events/Gigs</h1>
                <div className="event-card-container">
                    
                    {eventList.map((value, key) =>{
                        return(
                        <EventCard 
                        title= {value.eventName}
                        img={img}
                        address={value.eventAddress}
                        desc={value.eventDetails}
                        date={formatDate(value.eventDate)}
                        time="9PM - 5AM"
                        />
                        )
                    })}
                </div>
            </div>

            <div className="home-about-container">
                    <AboutHome/>
            </div>


                    
    </div>
    </>
    )
};

export default Home;