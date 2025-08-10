import '../css/pages-style/Events.scss'
import EventSlider from '../components/events/Event-Slider.js'
import EventBanner from '../components/events/Event-Banner.js'

const Evemts = () => {
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

                </div>
               
            </div>
        </div>
    )
}

export default Evemts