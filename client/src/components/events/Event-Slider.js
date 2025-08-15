import '../../css/components-style/events/Event-Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EventCard from '../home/event-section.js'


function CustomPaginationComponent() {
  return <div className="swiper-pagination"></div>;
}
const EventSlider = () => {

     return (
        <>
        <div className='swiper-container'>
            <div className='navigation-btns'>
                <button className='prev'></button>
                <button className='next'> </button>
            </div>

            <Swiper 
            navigation={{
                nextEl: '.next',
                prevEl: '.prev'
            }}
            pagination={{ 
                el: '.swiper-pagination', 
                clickable: true 
            }}
            spaceBetween={40}
            modules={[Navigation, Pagination]} className="mySwiper">
                
            
            <SwiperSlide>
                <EventCard 
                        title= "Event Name Krazy"
                        address="Bacolod City"
                        desc="The Aurora Night Festival lit up the heart of the city with a dazzling fusion of lights, music, and community spirit. As the sun dipped below the skyline, strings of colorful lanterns illuminated the streets, guiding visitors toward the central plaza. Local artisans showcased their creations infhdrhdnb"
                        date="January 2, 2024"
                        time="9PM - 5AM"
                        customClass="slider-card"
                        />
            </SwiperSlide>

            <SwiperSlide>
                <EventCard 
                        title= "Event Name Krazy"
                        address="Bacolod City"
                        desc="The Aurora Night Festival lit up the heart of the city with a dazzling fusion of lights, music, and community spirit. As the sun dipped below the skyline, strings of colorful lanterns illuminated the streets, guiding visitors toward the central plaza. Local artisans showcased their creations infhdrhdnb"
                        date="January 2, 2024"
                        time="9PM - 5AM"
                        customClass="slider-card"
                        />
            </SwiperSlide>

            </Swiper>
 
            <CustomPaginationComponent />
                
        </div>
        </>
    );
    }

export default EventSlider