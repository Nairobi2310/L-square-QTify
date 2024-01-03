import React, { useEffect }  from 'react';
import { Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';


const Controls = ({data}) => {
    const swiper =useSwiper();
    useEffect(() =>{
        swiper.slideTo(0);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);
  return null;
}

const Carousel =({ data, renderComponent }) =>{
    return(
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: "0px 20px" }}
                initialSlide={0}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={"auto"}
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele, idx) => (<SwiperSlide key = {idx}>{renderComponent(ele)}</SwiperSlide>))}
            </Swiper>
        </div>
    );
};

export default Carousel;