import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import '../css/pages-style/Event.scss'
import axios from  'axios'
import img from '../images/banner/hero_1.jpg'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';
import EventCard from '../components/home/event-section.js'


const Event = () =>{


    let { id } = useParams();

    const [event, setEvent] = useState({}) 
    const [events, setEvents] = useState([])
    
    useEffect(() => {

        const fetchEvent = async () => {
            try{
            const response = await axios.get(`http://localhost:3001/events/byId/${id}`)
            setEvent(response.data)
            console.log(response.data)
        } catch(e){
            console.log(e.message)
        }}
        fetchEvent()
    }, [id])

       useEffect(() => {
        try{
            axios.get(`http://localhost:3001/events`).then((response) => {
            setEvents(response.data)
        })
        } catch(e){
            console.log(e.message)
        }
    }, [])

    return(
        <div className='event-main'>

            <div className='event-banner'>
                <img src={img}/>

                <div className='banner-overlay'>
                    <h1>
                        {event.eventName}
                    </h1>

                    <h2>{event.eventAddress}zsdvgsdbvrf</h2>
                    <h2>{event.eventDate}</h2>


                </div>
            </div>

            <div className='event-section'>


                <div className='section-container'>
                    <div className='event-contact'>

                        <h1 className='section-header'>
                            About the event
                        </h1>

                        <p className='about-txt'> 
                            werkfw lfiwblhbabsefbal sdvcak jckjlreb asbclasc asbc
                            werkfwlfiwb lhbabsefbalsdvc akjc kjlrebasbclascasbc
                            werkfwlfiwbl hbabsefb alsd vcakjckjlreb asbclascasbc
                            werkfwlfiwblh babsefbalsd vcakjckj r ebasbc lascasbc
                                werkfwlf iwblhbabsefbal dvcakjckjlrebas bclascasbc
                                werkfw lfiwblhbabse fbal sdvcakjckjlreb asbclascasbc
                            werkfwlfiwb lhbabsefbalsdvcakjc kjlrebasbclascasbc
                            werkfwlfiwbl hbabsefb alsdvcakjckjlreb asbclascasbc
                            werkfwlfiwblh babsefbalsd vcakjckj rebasbclascasbc
                                werkfwlf iwblhba bsefbal dvcakjckjlrebas bclascasbc
                        </p>

                    </div>

                    <div className='div'></div>

                    <div className='event-contact'>

                            <h1 className='section-header'>
                            Interested? Check them out 
                            </h1>

                            <div className='socials'>
                                <FacebookIcon className='socials-icon'/>
                                <p>@adhvjahskmajh</p>
                            </div>

                    </div>

                </div>
                    
               
            </div>

            <div className='event-section'>

                <h1 className='header'>
                    Check out my other events
                </h1>
                <div className='event-list'>

                    {events.map((value, key) =>{
                        return(
                     
                        
                        <EventCard key={value.eventId}
                        id={value.eventId}
                        title= {value.eventName}
                        address={value.eventAddress}
                        desc="The Aurora Night Festival lit up the heart of the city with a dazzling fusion of lights, music, and community spirit. As the sun dipped below the skyline, strings of colorful lanterns illuminated the streets, guiding visitors toward the central plaza. Local artisans showcased their creations infhdrhdnb"
                        date={value.eventDate}
                        time="9PM - 5AM"
                        />
                    

                        )
                    })}
                </div>       

            </div>     

        </div>
    )
}

export default Event;