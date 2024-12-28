import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import { FaArrowAltCircleRight } from "react-icons/fa";
// import { FaArrowAltCircleLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './NewCarousel.css'

import 'swiper/css/navigation';

import pieStrawberry from '../../../../public/food/pie-strawberry.png';
import blueCoffee from '../../../../public/beverages/blue-cream-coffee.png';
import standardCoffee from '../../../../public/beverages/coffe-cream-standard.png';
import sandwich from '../../../../public/food/side-view-club-sandwich-with-ham-pickled-cucumber-lettuce-tomato-cheese-sauce-board.jpg';
import acai1 from '../../../../public/berry-acai/flavour1.jpeg';
import acai2 from '../../../../public/berry-acai/flavour4.jpeg';
import hotMeal from '../../../../public/food/hot-meal.jpg';

function NewCarousel() {
    return (
        <div className="content-wrap-swiper" style={{position: "absolute", marginTop: "7em", backgroundColor: "", width: "100%"}}>
            {/*<h1 className="heading">Flower Gallery</h1>*/}
            <Swiper
                className="swiper_container"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                // pagination={{ el: '.swiper-pagination', clickable: true }}
                // navigation={{
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                //     // clickable: true,
                // }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <img src={acai1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pieStrawberry} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={blueCoffee} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sandwich} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={acai2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={standardCoffee} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hotMeal} alt="slide_image" />
                </SwiperSlide>
                <div className="slider-controler" style={{top: "0"}}>
                    <div className="swiper-button-prev slider-arrow">
                        {/*<FaArrowAltCircleLeft color="#0C6E5A" size={20} />*/}
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        {/*<FaArrowAltCircleRight color="#0C6E5A" size={20}/>*/}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default NewCarousel;