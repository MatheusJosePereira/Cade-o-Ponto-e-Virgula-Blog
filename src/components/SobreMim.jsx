import "./SobreMim.css";
import pontoevirgula from "../assets/MatheusJosé_foto.jpg";
import { ChevronDown } from 'lucide-react';
function SobreMim(){
    return(
        <section className="w-full mt-10">
                <div className="flex justify-center items-center h-[512px] gap-40">
                    <div className="flex flex-col items-center w-lg space-y-8">
                        <h3 className="text-center text-3xl">O Cadê o ponto e vírgula está
                        aqui para te guiar entre erros de sintaxe e acertos de carreira, uma linha de código e uma xícara de café por vez</h3>
                        <p className="text-justify">Este blog nasceu da minha vontade de transformar aprendizado em memória viva. Aqui, compartilho minha jornada em ciência de dados, lógica e desenvolvimento, além dos desafios que encontro ao tentar lembrar onde esqueci o ponto e vírgula no código. E quem sabe ser uma referência para as pessoas que buscam crescer junto na área para nos incentivarmos também a encontrar o grande e temivel ponto e virgula no código.</p>
                    </div>
                    <img className="w-[350px] h-[370px]"  src={pontoevirgula} alt="" />
                </div>
                <div className="relative p-22 text-center">
                    <hr className="border-t border-gray-300" />
                    <div className="absolute inset-0 flex justify-center -top-3">
                        <span className="bg-white py-22 px-5">
                        <ChevronDown className="w-5 h-5 text-gray-500 animate-bounce" />
                        </span>
                    </div>
                </div>
        </section>
    )
}

export default SobreMim


