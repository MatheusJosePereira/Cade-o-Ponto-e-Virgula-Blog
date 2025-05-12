import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoBlog from '../../assets/Logo.png';
import zapzap from '../../assets/icons/zapzap.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import { Link } from 'react-router-dom';

function NavBar() {

  //Verificação para ver se o menu foi ou não aberto, começa como false, mas se o tamanho da tela passar do tamanho md (médio) ela é desativado e mostrado as opções fora do menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='w-full h-8 bg-purple-600'></div>
      <nav className='flex items-center justify-between h-16 px-4 bg-white shadow-md'>
        {/* Logo */}
        <div className='flex items-center justify-center'>
          <img className='w-128 me-34 md:w-48' src={logoBlog} alt='Logo' />
        </div>

        {/* Hamburger Menu*/}
        <div className='md:hidden me-5'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegação - Desktop */}
        <div className='hidden md:flex gap-5'>
          <ul className='flex gap-10 text-black'>
            <Link to='/'>Pagina Inicial</Link>
            <li>Livros</li>
            <li className='flex items-center gap-1 cursor-pointer'>
              <span>Categorias</span>
              <ChevronDown className='text-blue-600 w-4 h-4' />
            </li>
            <li>Quem sou</li>
          </ul>
        </div>

        {/* Redes Sociais - Desktop */}
        <div className='hidden md:flex gap-4'>
          <img src={zapzap} className='w-8' alt='ZapZap' />
          <img src={instagram} className='w-8' alt='Instagram' />
          <img src={linkedin} className='w-8' alt='LinkedIn' />
        </div>
      </nav>

      {/* Navegação - Mobile */}
      {isOpen && (
        <div className='flex flex-col items-start gap-4 p-4 md:hidden'>
          <ul className='flex flex-col gap-2 text-black'>
            <Link to='/'>Pagina Inicial</Link>
            <li>Livros</li>
            <li className='flex items-center gap-1 cursor-pointer'>
              <span>Categorias</span>
              <ChevronDown className='text-blue-600 w-4 h-4' />
            </li>
            <li>Quem sou</li>
          </ul>
          <div className='flex gap-4'>
            <img src={zapzap} className='w-8' alt='ZapZap' />
            <img src={instagram} className='w-8' alt='Instagram' />
            <img src={linkedin} className='w-8' alt='LinkedIn' />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
