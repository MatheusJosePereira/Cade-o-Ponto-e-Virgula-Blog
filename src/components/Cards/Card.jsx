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
    <div className="flex flex-wrap gap-6 justify-center">
      {posts.map((post, index) => (
        <Link
          key={index}
          to={`/Detalhes/${post.id}`}
          className="w-full sm:w-80 md:w-96 lg:w-[400] rounded-md shadow-2xl cardContainer transform transition-transform duration-300 hover:scale-110 "
          style={{ display: "block", cursor: "pointer" }}
        >
          {/* Exibindo a imagem post */}
          {post.imgUrl && (
            <img
              className="w-full h-64 object-cover rounded-t imagem"
              src={post.imgUrl}
              alt={post.titulo}
            />
          )}

          <div className="px-6 py-4">
            {/* Exibindo o título do post */}
            <div className="font-bold text-center text-xl mb-2">
              {post.titulo}
            </div>

            {/* Exibindo a descrição do post */}
            <p className="text-gray-700 text-base">{post.descricao}</p>
            <p className="text-gray-500 text-base mt-2">Autor: {post.autor}</p>

            {/* Exibindo a data de publicação formatada */}
            {post.dataPublicacao && (
              <p className="text-gray-500 text-sm mt-2">
                {post.dataPublicacao.toLocaleDateString("pt-BR")}
              </p>
            )}
          </div>

          <div className="px-6 pt-4 pb-2">
            {/* Exibindo as tags */}
            {Array.isArray(post.tags) &&
              post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
