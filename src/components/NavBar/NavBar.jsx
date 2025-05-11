import { ChevronDown } from 'lucide-react';
import logoBlog from "../../assets/Logo.png"
import zapzap from "../../assets/icons/zapzap.png"
import instagram from "../../assets/icons/instagram.png"
import linkedin from "../../assets/icons/linkedin.png"
import { Link } from 'react-router-dom';

function NavBar(){
    return(
    <div>
    <div className='w-full h-8 bg-purple-600'></div>
      <nav className="flex items-center h-16 px-4 gap-30 mt-5 ">
        {/* Logo */}
        <div className="flex items-center group">
          <img className='w-[400px]' src={logoBlog} alt="" />
        </div>

        {/* Navegação */}
        <div className="flex justify-around">
          <ul className="flex gap-10 text-black">
            <Link to="/">Pagina Inicial</Link>
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
        <div className= "flex flex-row gap-4">
            <img src={zapzap} className="w-8" alt="" />
            <img src={instagram} className="w-8" alt="" />
            <img src={linkedin} className="w-8" alt="" />
         </div>
      </nav>
      </div>
    )
}

export default NavBar