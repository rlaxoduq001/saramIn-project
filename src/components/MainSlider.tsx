import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { EmploymentBox } from './EmploymentBox';

export const Slider:React.FC = () => {
  return (
    <div className='flex p-8 w-full' style={{flexBasis:"25%"}}>
      <div className='flex flex-col justify-center space-y-4'>
        <div className='p-2 hover:bg-gray-300 rounded'>대기업 공고</div>
        <div className='p-2 hover:bg-gray-300 rounded'>브랜드 채용관</div>
        <div className='p-2 hover:bg-gray-300 rounded'>인기 TOP 기업</div>
      </div>

      <Swiper
        style={{flex:"1"}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        // slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          600: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1100: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1278: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
          <SwiperSlide>
            <EmploymentBox/>
          </SwiperSlide>
          <SwiperSlide>
            <EmploymentBox/>
          </SwiperSlide>
          <SwiperSlide>
            <EmploymentBox/>
          </SwiperSlide>
          <SwiperSlide>
            <EmploymentBox/>
          </SwiperSlide>
          <SwiperSlide>
            <EmploymentBox/>
          </SwiperSlide>
          <SwiperSlide>
            <EmploymentBox/>
          </SwiperSlide>
          
      </Swiper>

      <div style={{flexBasis:"18%", paddingLeft: "24px", width:"228px", height:"280px"}}>
        <img src="https://www.saraminbanner.co.kr/new/main/2023/12/s5ubmv_gubh-1bqufdt_PC292x240.png"/>
        <img src='https://www.saraminbanner.co.kr/new/main/2023/11/s4v06h_4gup-1bqufdt_bannermainposition1.png'/>
      </div>
    </div>
  )
}
