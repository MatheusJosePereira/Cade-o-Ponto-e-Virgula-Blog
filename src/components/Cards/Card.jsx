import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Card() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,

          dataPublicacao: data.dataPublicacao
            ? data.dataPublicacao.toDate()
            : null,
        };
      });

      // Ordenando os posts pela dataPublicacao (da mais recente para a mais antiga)
      const sortedPosts = postsData.sort((a, b) => {
        if (a.dataPublicacao && b.dataPublicacao) {
          return b.dataPublicacao - a.dataPublicacao;
        }
        return 0;
      });

      setPosts(sortedPosts.slice(0, 6));
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
      {posts.map((post, index) => (
        <Link
          key={index}
          to={`/Detalhes/${post.id}`}
          className="w-full max-w-xs mx-auto rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          style={{ display: "block", cursor: "pointer" }}
        >
          {/* Exibindo a imagem do post */}
          {post.imgUrl && (
            <img
              className="w-full h-48 object-cover rounded-t"
              src={post.imgUrl}
              alt={post.titulo}
            />
          )}

          <div className="px-4 py-4 bg-white">
            {/* Exibindo o título do post */}
            <div className="font-bold text-center text-xl mb-2">{post.titulo}</div>

            {/* Exibindo a descrição do post */}
            <p className="text-gray-700 text-sm md:text-base">{post.descricao}</p>
            <p className="text-gray-500 text-xs md:text-base mt-2">Autor: {post.autor}</p>

            {/* Exibindo a data de publicação formatada */}
            {post.dataPublicacao && (
              <p className="text-gray-500 text-xs md:text-base mt-2">
                {post.dataPublicacao.toLocaleDateString("pt-BR")}
              </p>
            )}
          </div>

          <div className="px-4 pt-4 pb-2 bg-white">
            {/* Exibindo as tags */}
            {Array.isArray(post.tags) &&
              post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
