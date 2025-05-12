import LivroSessao from "../../assets/LivroSessao.jpg"

function SessaoLivro() {
  return (
    <section className="mt-10 w-full flex flex-col md:flex-row bg-teal-100 justify-around items-center h-auto md:h-[600px] py-10">
      {/* Seção de Imagem */}
      <div className="flex items-center w-full md:w-[700px] p-4 justify-center">
        <img 
          className="rounded-[150px] object-cover w-[250px] h-[250px] md:w-[750px] md:h-[500px]" 
          src={LivroSessao} 
          alt="Imagem de livros"
        />
      </div>

      {/* Seção de Texto */}
      <div className="flex flex-col w-full md:w-[700px] items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Explore Minha Biblioteca de Livros</h2>
        <p className="mt-4 text-base md:text-xl text-gray-700">
          Encontre livros essenciais para programação, ciências de dados e desenvolvimento pessoal!
        </p>

        <div className="w-full flex justify-center mt-8">
          <button className="px-6 py-3 bg-amber-400 text-white rounded-lg shadow-md hover:bg-purple-600 transition duration-300 w-[200px]">
            Explore mais livros
          </button>
        </div>
      </div>
    </section>
  )
}

export default SessaoLivro;
