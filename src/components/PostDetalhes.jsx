import { ChevronDown, Search } from 'lucide-react';
import "./Header.css";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { db } from '../firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';
import ConteudoPostDetalhes from './ConteudoPostDetalhes.jsx';

function PostDetalhes() {
    const { id } = useParams(); // ID do post via rota
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, 'posts', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const postData = docSnap.data();
                
                // Formatar a data de publicação
                if (postData.dataPublicacao) {
                    const timestamp = postData.dataPublicacao.toDate(); 
                    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
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
            <header className="w-full">
                <nav className="flex items-center justify-between h-16 px-4 mt-5">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center p-10 group">
                        <h1 className='text-2xl font-bold'>Cadê o Ponto e Virgula?</h1>
                        <motion.div
                            whileHover={{ x: [0, -5, 5, -5, 5, -5, 5, 0] }}
                            transition={{ duration: 0.6 }}
                        >
                            <Search className='ms-3 w-17 h-17' />
                        </motion.div>
                        <span className="position left-92 top-10 absolute flex items-center justify-center text-black text-sm opacity-0 scale-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-300 font-bold">
                            ;
                        </span>
                    </div>

                    {/* Navegação */}
                    <div className="flex-1 flex justify-center">
                        <ul className="flex gap-10 text-black">
                            <Link to={'/'}><li>Pagina Inicial</li></Link>
                            <li>Livros Lidos</li>
                            <li>
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <span>Categorias</span>
                                    <ChevronDown className="text-blue-600 w-4 h-4" />
                                </div>
                            </li>
                            <li>Sobre Mim</li>
                        </ul>
                    </div>

                    {/* Botões de registro */}
                    <div className="flex justify-around gap-5 p-10">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Log In
                        </button>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </header>

            <section style={{backgroundColor:"#f9f9f9"}} className='w-full py-10'>
                <div className='max-w-4xl mx-auto px-6'>
                    {post.imgUrl && (
                        <img src={post.imgUrl} alt={post.titulo} className='w-full h-[500px] rounded-lg mb-6' />
                    )}
                    <h2 className='text-center text-4xl font-bold mb-6'>{post.titulo}</h2>
                    <p className='text-center text-gray-700 leading-7 whitespace-pre-line'>
                        Publicado dia  {post.formattedDate}<br/> Por: <span className='font-bold'>{post.autor}</span>
                    </p>
                    <ConteudoPostDetalhes/>
                </div>
            </section>
        </div>
    );
}

export default PostDetalhes;
