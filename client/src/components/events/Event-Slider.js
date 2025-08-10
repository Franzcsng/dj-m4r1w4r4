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
                
            

            <SwiperSlide className='swiper-slide'><EventCard desc='aef'/></SwiperSlide>
            <SwiperSlide><EventCard desc='aef'/></SwiperSlide>
            <SwiperSlide><EventCard desc='aef'/></SwiperSlide>
            <SwiperSlide><EventCard desc='aef'/></SwiperSlide>

            </Swiper>
 
            <CustomPaginationComponent />
                
        </div>
        </>
    );
    }

export default EventSlider