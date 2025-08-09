import '../css/pages-style/Events.scss'
import EventBanner from '../components/events/Event-Banner.js'

const Evemts = () => {
    return(
        <div className='events-main'>
            <EventBanner/>

            <div className='events-section'>
                <div className='section-header'>
                    <h2>Upcoming Events</h2>
                </div>
            </div>

            <div className='events-section'>
                <div className='section-header'>
                    <h2>Latest Gigs</h2>
                </div>
            </div>
        </div>
    )
}

export default Evemts