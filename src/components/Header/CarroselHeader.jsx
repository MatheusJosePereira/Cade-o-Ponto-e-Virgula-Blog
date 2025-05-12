import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import fundoquadriculado from "../../assets/FundoQuadriculadoRoxoVerde.jpg";
import videoFundo from "../../assets/videos/FundoVideo.mp4";
import livroecafe from "../../assets/videos/LivroeCafe.mp4"
import Spinner from "../TelaCarregamento/Spinner";

function CarroselHeader() {
  const [postsData, setPostsData] = useState([]);
  const [lastPost, setLastPost] = useState(null);

  useEffect(() => {
    const fetchPostsData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const fetchedPostsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        dataPublicacao: doc.data().dataPublicacao
          ? doc.data().dataPublicacao.toDate()
          : null,
      }));

      const sortedPosts = fetchedPostsData.sort((a, b) => {
        if (a.dataPublicacao && b.dataPublicacao) {
          return b.dataPublicacao - a.dataPublicacao;
        }
        return 0;
      });

      setPostsData(sortedPosts); 
      setLastPost(sortedPosts[0]);
    };

    fetchPostsData();
  }, []);


  const destaquePost = postsData[2];

  const slidesData = [
    {
      title: "Bem vindo ao Cadê o Ponto e Virgula!",
      paragraph: "Transforme seus primeiros passos na tecnologia em conquistas! Aqui compartilho minhas experiências, além de cursos, livros e conteúdos voltados ao desenvolvimento pessoal e cultural.",
      video: videoFundo,
      type: "video",
    },
    {
      title: "Última Postagem",
      paragraph: lastPost ? lastPost.descricao : <Spinner />,
      image: lastPost?.imgUrl || <Spinner />,
      type: "image",
    },
    {
      title: "Minha estante de livros☕",
      paragraph: "No mundo da tecnologia, entre códigos e desafios, todos precisamos de uma pausa. E o que melhor do que saborear um bom café enquanto mergulha em uma boa leitura? Aqui você encontrará os livros que estão me acompanhando na minha jornada. Quem sabe algum deles te inspira a continuar a sua.",
      video: livroecafe,
      type: "video",
    },
    {
      title: "A Jornada de Construção do Blog!",
      paragraph: "Descubra como nasceu o 'Cadê o Ponto e Vírgula!' e os desafios que enfrentei ao longo da criação. Desde as decisões difíceis para construir um blog escalável e eficiente até o segredo para sobreviver às longas noites de trabalho.",
      image: destaquePost?.imgUrl || fundoquadriculado, 
      type: "image",
    },
  ];

  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{ delay: 12000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide className='md:pt-24' key={index}>
          <div className='relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center bg-blue-400'>
            {slide.type === "video" ? (
              <video
                src={slide.video}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className='absolute inset-0 w-full h-full object-cover z-0 border-4 border-white rounded-lg'
              />
            )}
            <div className='relative z-10 p-4 md:p-6 bg-black/50 rounded-md text-center'>
              <h2 className='text-white text-xl md:text-3xl font-bold'>{slide.title}</h2>
              <p className='text-white text-sm md:text-base mt-1 md:mt-2'>{slide.paragraph}</p>
              {slide.postId && (
                <a href={`/post/${slide.postId}`} className='text-white mt-2 block'>
                  Ver Post Completo
                </a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarroselHeader;
