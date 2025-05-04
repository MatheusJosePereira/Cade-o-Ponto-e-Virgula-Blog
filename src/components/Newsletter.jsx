import newsletter from "../assets/Newsletter.jpg"
import "./Newsletter.css"

function Newsletter(){
    return(
    <div class="flex items-center justify-around bg-purple-300 h-[90vh] mt-10">
      <div class="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">

        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center tituloMD">
          Vamos trocar ideias?
          </h1>
          <p class="text-sm text-gray-500 text-center w-5/6 roboto">
          Toda semana eu envio uma seleção com artigos, aprendizados e novidades do mundo da programação e dados. É só colocar seu e-mail aqui embaixo!
          </p>
          <input
            type="text"
            placeholder="Email"
            class="border-2 rounded-lg w-full h-12 px-4"
          />
          <button
            class="bg-blue-400 text-white rounded-md hover:bg-blue-300 font-semibold px-4 py-3 w-full"
          >
            Inscreva-se 📩
          </button>
          
        </div>
      </div>
      <div className="w-1/2"><img className="rounded-2xl" src={newsletter} alt="" srcset="" /></div>
    </div>
    )
}

export default Newsletter