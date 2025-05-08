import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // Biblioteca para ler html no .md
import Footer from './Footer';

function ConteudoPostDetalhes() {
  const { id } = useParams(); 
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const dados = docSnap.data();
          const urlMarkdown = dados.conteudo;

          // Buscar o conteúdo do arquivo .md da URL
          const res = await fetch(urlMarkdown);
          const textoMarkdown = await res.text();

          setConteudo(textoMarkdown);
        } else {
          console.log("Documento não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar conteúdo do markdown:", error);
      }
    };

    fetchConteudo();
  }, [id]);

  return (
    
    <div className="prose mx-auto p-5">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {conteudo}
      </ReactMarkdown>
      
    </div>
    
  );
}

export default ConteudoPostDetalhes;
