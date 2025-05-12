import newsletter from "../../assets/Newsletter.jpg";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-purple-300 mt-10 px-4 sm:px-8 py-8 md:h-[450px]">
      {/* Seção do formulário */}
      <div className="bg-white rounded-2xl border shadow-xl p-8 max-w-md w-full mb-8 md:mb-0">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-2xl text-gray-700 text-center">
            Vamos trocar ideias?
          </h1>
          <p className="text-sm text-gray-500 text-center w-full sm:w-4/5">
            Toda semana eu envio uma seleção com artigos, aprendizados e novidades do mundo da programação e dados. É só colocar seu e-mail aqui embaixo!
          </p>
          <input
            type="text"
            placeholder="Email"
            className="border-2 rounded-lg w-full h-12 px-4 mt-4"
          />
          <button className="bg-blue-400 text-white rounded-md hover:bg-blue-300 font-semibold px-4 py-3 w-full mt-4">
            Inscreva-se 📩
          </button>
        </div>
      </div>

      {/* Seção da imagem */}
      <div className="w-full sm:w-3/4 md:w-1/2">
        <img
          className="w-full h-auto max-h-[300px] object-cover rounded-2xl"
          src={newsletter}
          alt="Newsletter"
        />
      </div>
    </div>
  );
}

export default Newsletter;
