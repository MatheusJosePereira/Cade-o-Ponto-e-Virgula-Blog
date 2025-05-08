import { ChevronDown, Search } from 'lucide-react';
import CarroselHeader from './CarroselHeader';
import "./Header.css"
import {motion} from 'framer-motion';

function Header() {

  return (
    <header className="w-full">
      <div className='w-full h-8 bg-purple-600'></div>
      <nav className="flex items-center justify-between h-16 px-4 mt-5 ">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center p-10 group">
          <h1 className='text-2xl font-bold'>Cadê o Ponto e Virgula?</h1>
          <motion.div
          whileHover={{ x: [0, -5, 5, -5, 5, -5, 5, 0] }}
          transition={{ duration: 0.6 }}
          >
          <Search className=' ms-3 w-17 h-17' />
          </motion.div>
          
          <span class=" position left-92 top-17 absolute flex items-center justify-center text-black text-sm opacity-0 scale-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-300 font-bold">
          ;
          </span>
        </div>

        {/* Navegação */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-10 text-black">
            <li>Pagina Inicial</li>
            <li>Livros</li>
            <li>
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Categorias</span>
                <ChevronDown className="text-blue-600 w-4 h-4" />
              </div>
            </li>
            <li>Quem sou</li>
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

      <CarroselHeader/>

      
    </header>
  );
}

export default Header;
