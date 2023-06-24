import React from 'react'
import "../Style/Homepage.css"
import Video from '../video/name.mp4'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {discount , lastAdded , instagramPost} from '../Data/Data'

function Homepage() {


  return (
    <div className='container'>
      <header>
        <div className='header-video'>
          <video width="750" height="500" autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className='header-text'>
          <span>AquaGarden;</span>
          <p>Sizlere daha iyi hizmet verebilmek için buradayız. Akvaryumlar , Balıklar , Taşlar, ve Bitkiler ve daha fazlası sizlerle.</p>
          <a href="/Shop">
            <button>Ürünleri İncele</button>
          </a>
        </div>
      </header>
      <div className='swiper'>
        <h4 className='text-center'>İndirim'li Ürünler</h4>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints= {
            {  
              320: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            767: {
              slidesPerView: 2.5,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 3.5,
              spaceBetween: 40
            }
          }
          }
          slidesPerView={3.5}
          navigation
          pagination={{ clickable: true }}
        >
          {discount
            .map((item) => (
             <SwiperSlide key={item.id} className="discount">
              <a className='product-href' href={item.productHref}>
              <img src={item.image} ></img>
                <p className='discount-price text-center'>
                  <span>{item.discountedPrice}</span>
                  <span>{item.price}</span>
                </p> 
                <p className='product-title text-center'>{item.title}</p>             
              </a>
                
             </SwiperSlide>   
            ))}

        </Swiper>
      </div>
      <div className='swiper'>
        <h4 className='text-center'>Son eklenen ürünler</h4>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints= {
            {  
              320: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            767: {
              slidesPerView: 2.5,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 3.5,
              spaceBetween: 40
            }
          }
          }
          slidesPerView={3.5}
          navigation
          pagination={{ clickable: true }}
        >

          {lastAdded
            .map((item) => (
              <SwiperSlide key={item.id} className="added">
                <a className='product-href' href={item.productHref}>
                <img src={item.image}></img>
                <p className='text-center'>{item.text}</p>
                <p className='added-price text-center '>
                  <span>{item.price}</span>
                  <span>{item.title}</span>
                </p> 
                </a>
                
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className='insta-post'>
        <h4 className='text-center'>İnstagram Gönderiler</h4>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints= {
            {  
              320: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }
          }
          slidesPerView={3.5}
          navigation
          pagination={{ clickable: true }}
        >
          {instagramPost
            .map((item) => (
              <SwiperSlide key={item.id} className="instagram-post">
                <img src={item.image} ></img>
                <p className='text-center'>{item.text}</p>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>

  )
}


export default Homepage


