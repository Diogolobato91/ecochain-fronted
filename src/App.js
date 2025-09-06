import './App.css';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import ValuesSection from './components/sections/ValuesSection';
import TechnologySection from './components/sections/TechnologySection';
import ComparisonSection from './components/sections/ComparisonSection'; 
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <HowItWorksSection />
        <TechnologySection />
        <ComparisonSection /> {/* 2. ADICIONE AQUI */}
      </main>
      <Footer />
    </div>
  );
}

export default App;