import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imagem from "../../assets/Principal.jpg"

// Array para o conteúdo dos slides
const slidesData = [
  {
    title: "Bem vindo ao Cade o Ponto e Virgula",
    paragraph: "Este blog está em construção com React, Tailwind e Firebase.",
    image: imagem, 
  },
  {
    title: "Última Postagem",
    paragraph: "Aqui você encontrará conteúdos atualizados frequentemente.",
    image: imagem,
  },
  {
    title: "Destaque!",
    paragraph: "Confira os posts mais populares e em destaque!",
    image: imagem, 
  }
];

function CarroselHeader() {
  return (
    <Swiper
      spaceBetween={20}
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
      className='mySwiper'
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='relative w-full h-[80vh] md:h-[130vh] flex items-center justify-center bg-blue-400'>
            <img src={slide.image} alt={slide.title} className='absolute inset-0 w-full h-full object-cover z-0' />
            <div className='relative z-10 p-4 md:p-6 bg-black/50 rounded-md text-center'>
              <h2 className='text-white text-xl md:text-3xl font-bold'>{slide.title}</h2>
              <p className='text-white text-sm md:text-base mt-1 md:mt-2'>{slide.paragraph}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarroselHeader;
