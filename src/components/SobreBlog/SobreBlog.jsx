import "./SobreBlog.css";
import pontoevirgula from "../../assets/MatheusJoseFoto.png";
import C from "../../assets/icons/C.png";
import rlanguage from "../../assets/icons/rlanguage.png";
import python from "../../assets/icons/python.png";
import estatistica from "../../assets/icons/estatistica.png";
import cubomagico from "../../assets/icons/cubomagico.png";

function SobreMim() {
  return (
    <section className="bg-blue-300 mt-10 w-full mb-10">
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-8">
        
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[50%] space-y-8">
          <h2 className="text-3xl text-center lg:text-left">O Cadê o Ponto e Vírgula foi criado para te ajudar</h2>
          <p className="text-left text-sm md:text-base lg:text-lg">
            O "Cadê o Ponto e Vírgula?" nasceu da minha vontade de transformar o aprendizado em uma memória viva.
            Neste espaço, compartilho minha jornada em ciência de dados, lógica e desenvolvimento, além dos desafios
            diários, por exemplo o momento de lembrar onde esqueci aquele maldito ponto e vírgula no código! Meu
            objetivo é não só registrar meu progresso, mas também criar um ambiente de troca de conhecimento. Quem
            sabe, assim, possamos nos ajudar a encontrar não só o 'ponto e vírgula', mas também a sequência de código
            que nos levará a crescer juntos na área.
          </p>
          <h2 className="text-2xl text-center lg:text-left">Minhas Referências</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-3 space-x-4">
            <img src={C} className="w-16 shadow transform transition-transform duration-300 hover:scale-110 border border-white" alt="C" />
            <img src={rlanguage} className="w-16 shadow transform transition-transform duration-300 hover:scale-110 border border-white" alt="R Language" />
            <img src={python} className="w-16 shadow transform transition-transform duration-300 hover:scale-110 border border-white" alt="Python" />
            <img src={estatistica} className="w-16 shadow transform transition-transform duration-300 hover:scale-110 border border-white" alt="Estatística" />
            <img src={cubomagico} className="w-16 shadow transform transition-transform duration-300 hover:scale-110 border border-white" alt="Cubo Mágico" />
          </div>
        </div>

       
        <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0">
          <img className="w-[350px] h-[370px] object-cover rounded-md shadow-lg" src={pontoevirgula} alt="Matheus José" />
          <button className="mt-8 px-6 py-3 bg-amber-400 text-white md:me-10 rounded-lg shadow-md hover:bg-purple-600 transition">
            Conheça mais sobre mim
          </button>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
