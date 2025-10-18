import './App.css';
import Header from './ui/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import ValuesSection from './components/ValuesSection';
import TechnologySection from './components/TechnologySection';
import ComparisonSection from './components/ComparisonSection'; 
import Footer from './ui/Footer';
import BenefitsSection from './components/BenefitsSection';
import PartnersSection from './components/PartnersSection';

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