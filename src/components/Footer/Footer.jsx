import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 ">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-around">
                    {/* Coluna 1 */}
                    <div className="w-full sm:w-1/3 mb-6">
                        <h3 className="text-xl font-bold mb-4">Cadê o Ponto e Virgula?</h3>
                        <p className="text-gray-400 text-md max-w-72 text-left">
                            Este blog é um espaço para compartilhar as minhas experiências com a evolução do mercado de Tecnologia.
                            Aqui, cada postagem é uma oportunidade de aprendizado, troca de ideias e crescimento coletivo.
                        </p>
                    </div>

                    {/* Coluna 2 */}
                    <div className="w-full sm:w-1/3 mb-6">
                        <h3 className="text-xl font-bold mb-4">Links Importantes</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2">
                                <Link to="/" className="hover:text-gray-200">Página Inicial</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/livros" className="hover:text-gray-200">Livros</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contato" className="hover:text-gray-200">Contato</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/quemsou" className="hover:text-gray-200">Quem sou</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3*/}
                    <div className="w-full sm:w-1/3 mb-6">
                        <h3 className="text-xl font-bold mb-4">Contato e Redes Sociais</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2">
                                <a href="mailto:contato@blog.com" className="hover:text-gray-200">CadePontoVirgula@gmail.com</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Facebook</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Instagram</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer  */}
                <div className="text-center mt-6 text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Blog Cadê o Ponto e Virgula. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
