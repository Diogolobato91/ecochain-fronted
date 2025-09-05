import './App.css';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection'; // 1. Importe o novo componente

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection /> {/* 2. Adicione ele aqui */}
      </main>
    </div>
  );
}

export default App;