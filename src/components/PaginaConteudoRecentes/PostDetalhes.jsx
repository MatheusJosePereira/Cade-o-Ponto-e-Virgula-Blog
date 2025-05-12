import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ConteudoPostDetalhes from "./ConteudoPostDetalhes.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";  // Importando o Footer
import Spinner from "../TelaCarregamento/Spinner.jsx";

function PostDetalhes() {
  const { id } = useParams(); // ID do post via rota
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const postData = docSnap.data();

        // Formatar a data de publicação
        if (postData.dataPublicacao) {
          const timestamp = postData.dataPublicacao.toDate();
          const formattedDate = new Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(timestamp);
          postData.formattedDate = formattedDate;
        }
        setPost(postData);
      } else {
        console.log("Post não encontrado.");
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div className="w-full h-screen flex justify-center items-center"><Spinner/></div>;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <section className="w-full py-10 bg-[#f9f9f9] flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Imagem do post */}
          {post.imgUrl && (
            <img
              src={post.imgUrl}
              alt={post.titulo}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg mb-6"
            />
          )}

          {/* Título e informações do post */}
          <h2 className="text-center text-4xl font-bold mb-6">{post.titulo}</h2>
          <p className="text-center text-gray-700 leading-7 whitespace-pre-line">
            Publicado dia {post.formattedDate}
            <br /> Por: <span className="font-bold">{post.autor}</span>
          </p>

          {/* Conteúdo do post */}
          <div className="mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            <ConteudoPostDetalhes />
          </div>
        </div>
      </section>

      {/* Footer no final da página */}
      <Footer />
    </div>
  );
}

export default PostDetalhes;
