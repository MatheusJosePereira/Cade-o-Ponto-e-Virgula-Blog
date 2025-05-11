import Header from "./components/Header/Header";
import MaisRecentes from "./components/RecentesPosts/MaisRecentes";
import SobreMim from "./components/SobreBlog/SobreBlog";
import "./App.css";
import Newsletter from "./components/NewsLetter/Newsletter";
import LivrosSwiper from "./components/CarroselLivros/LivrosCarosel";
import Footer from "./components/Footer/Footer";
import SessaoLivro from "./components/SessaoLivros/SessaoLivro";

function App() {
  return (
    <main>
      <Header />
      <SobreMim />
      <MaisRecentes />
      <SessaoLivro />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
