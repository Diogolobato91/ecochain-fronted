import './App.css';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import ValuesSection from './components/sections/ValuesSection';
import TechnologySection from './components/sections/TechnologySection';
import ComparisonSection from './components/sections/ComparisonSection'; 
import Footer from './components/layout/Footer';
import BenefitsSection from './components/sections/BenefitsSection';
import PartnersSection from './components/sections/PartnersSection';

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
        <ComparisonSection />
        <BenefitsSection /> 
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;