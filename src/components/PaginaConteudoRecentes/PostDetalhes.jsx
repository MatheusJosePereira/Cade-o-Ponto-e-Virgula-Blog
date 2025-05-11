import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ConteudoPostDetalhes from "./ConteudoPostDetalhes.jsx";
import NavBar from "../NavBar/NavBar.jsx";

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

  if (!post) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <div>
      <NavBar />

      <section style={{ backgroundColor: "#f9f9f9" }} className="w-full py-10">
        <div className="max-w-4xl mx-auto px-6">
          {post.imgUrl && (
            <img
              src={post.imgUrl}
              alt={post.titulo}
              className="w-full h-[500px] rounded-lg mb-6"
            />
          )}
          <h2 className="text-center text-4xl font-bold mb-6">{post.titulo}</h2>
          <p className="text-center text-gray-700 leading-7 whitespace-pre-line">
            Publicado dia {post.formattedDate}
            <br /> Por: <span className="font-bold">{post.autor}</span>
          </p>
          <ConteudoPostDetalhes />
        </div>
      </section>
    </div>
  );
}

export default PostDetalhes;
