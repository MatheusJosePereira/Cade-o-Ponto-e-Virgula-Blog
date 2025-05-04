// components/LivrosSwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'

export default function LivrosSwiper() {
  const [livros, setLivros] = useState([])

  useEffect(() => {
    const fetchLivros = async () => {
      const querySnapshot = await getDocs(collection(db, 'Livros'))
      const livrosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setLivros(livrosData)
    }

    fetchLivros()
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto py-8 mt-10">
        <h2 className='text-center text-3xl mb-10'>Livros Recomendados</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {livros.map((livro, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-xl shadow-md p-4 flex flex-col items-center text-center">
              <div className="w-50 h-60 ms-10 mb-4 overflow-hidden">
                <img src={livro.capaURL} alt={livro.nomeLivro} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold">{livro.nomeLivro}</h3>
              <p className="text-sm text-gray-500">
                {Array.isArray(livro.autoresLivro) ? livro.autoresLivro.join(', ') : livro.autoresLivro}
              </p>

              {/* Tags abaixo do autor */}
              <div className="px-6 pt-4 pb-2">
                {Array.isArray(livro.tags) && livro.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
