import './App.css';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        {/* Futuramente, você adicionará as outras seções aqui */}
      </main>
    </div>
  );
}

export default App;