import Header from "./components/Header"
import MaisRecentes from "./components/MaisRecentes"
import SobreMim from "./components/SobreMim"
import "./App.css"
import Newsletter from "./components/Newsletter"
import LivrosSwiper from "./components/LivrosCarosel"


function App(){
  return(
    <main>
      
      <Header/>
      <SobreMim/>
      <MaisRecentes/>
      <LivrosSwiper/>
      <Newsletter/>
    </main>
  )
}

export default App