import LivroSessao from "../../assets/LivroSessao.jpg"

function SessaoLivro(){
    return(
        <section className=" mt-15 w-full flex bg-teal-100 justify-around h-[600px]">
            <div className=" flex items-center w-[700px] p-2">
            <img className="rounded-[150px]" src={LivroSessao} alt="" />
            </div>
            <div className="flex flex-col w-[700px] items-center justify-center">
                
                <h2 className="text-3xl text-center">Explore Minha Biblioteca de Livros</h2>
                <p className="mt-7 text-2xl text-center">Encontre livros essenciais para programação, ciências de dados e desenvolvimento pessoal!</p>
                <div className="w-full flex justify-center">
                <button className="mt-10 px-4 py-2 bg-amber-400 text-white rounded-lg shadow-md hover:bg-purple-600 transition w-[200px]">Explore mais livros</button>
                </div>
            </div>
            
            <div>

            </div>
        </section>
    )
}

export default SessaoLivro