import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import imagem from "../assets/Principal.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './estiloCarrosel.css';



function CarroselHeader() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
        <div className="relative w-full h-[90vh] flex items-center justify-center bg-blue-400">
            <img src={imagem} alt="" className="absolute left-30 inset-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 p-6 rounded">
                <h2 className="text-white text-3xl font-bold">Bem vindo ao Cade o Ponto e Virgula</h2>
                <p className="text-white mt-2">Este blog está em construção com React, Tailwind e Firebase.</p>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className=''>
        <div className="relative w-full h-[90vh] flex items-center justify-center  bg-teal-400">
            <img src={imagem} alt="" className="absolute left-30 inset-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 p-6 rounded">
                <h2 className="text-white text-3xl font-bold">Ultima Postagem</h2>
                <p className="text-white mt-2">Este blog está em construção com React, Tailwind e Firebase.</p>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className=''>
        <div className="relative w-full h-[90vh] flex items-center justify-center  bg-purple-400">
            <img src={imagem} alt="" className="absolute left-30 inset-0 w-full h-full object-cover z-0" />
            <div className="relative z-10 p-6 rounded">
                <h2 className="text-white text-3xl font-bold">Destaque!</h2>
                <p className="text-white mt-2">Este blog está em construção com React, Tailwind e Firebase.</p>
            </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default CarroselHeader
