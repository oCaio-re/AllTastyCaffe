import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Image} from "@chakra-ui/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

const image1: string = 'https://sportsfacilities.com/wp-content/uploads/2018/07/Community-center-lobby-scaled.jpg'
const image2: string = 'https://dcfwfuaf91uza.cloudfront.net/online/wp-content/uploads/Masters-in-Pastoral-Counseling.jpg'
const image3: string = 'https://www.beachwoodohio.com/ImageRepository/Document?documentID=1785'
const image4: string = 'https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-scaled.jpg'

export default function Carousel() {
    // const swiperWrapperSx = {
    //     w: {base: "100vw", md: "75em"},
    //     ml: "auto",
    //     mr: "auto",
    //     h: "405px"
    // }
    const imageSlideSx = {
        width: {base: "100%", md: "100%"},
        height: {base: "100%", md: "405px"},
        marginTop: {base: "1em", md: "1em"},
        objectFit: "cover",
        zIndex: "-1",
    }
    return (
        <>
            <Swiper
                className="mySwiper"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
            >
                <SwiperSlide >
                    <Image
                        src={image1}
                        alt="Slider"
                        className="slide-items"
                        sx={imageSlideSx}
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Image
                        src={image2}
                        alt="Slider"
                        className="slide-items"
                        sx={imageSlideSx}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={image3}
                        alt="Slider"
                        className="slide-items"
                        sx={imageSlideSx}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={image4}
                        alt="Slider"
                        className="slide-items"
                        sx={imageSlideSx}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
