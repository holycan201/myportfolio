
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navbar } from "./navbar";
import 'swiper/css';
import 'swiper/css/pagination';
import { SlideHome } from './slideHome';
import { SlideAbout } from './slideAbout';

export const Carousel = () => {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true
            }}
            modules={[Pagination]}
            className='mySwiper w-full h-screen'
        >
            <SwiperSlide>
                <Navbar />
                <SlideHome />
            </SwiperSlide>

            <SwiperSlide>
                <SlideAbout />
            </SwiperSlide>

            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}
