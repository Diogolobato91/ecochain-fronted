import { useState } from 'react';
import Button from '../ui/Button';
import '../style/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    alert('Login clicado!');
  };

  const handleSignUp = () => {
    alert('Cadastro clicado!');
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">E</div>
          <span className="logo-text">EcoChain</span>
        </div>

        <nav className="desktop-nav">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#how-it-works">Como Funciona</a>
          <a href="#technology">Tecnologia</a>
          <a href="#benefits">Benefícios</a>
          <a href="#partners">Parcerias</a>
          <a href="#contact">Contato</a>
</nav>

        {/* Botões do Header */}
        <div className="header-buttons">
          <Button type="outline" size="small" onClick={handleLogin}>
            Entrar
          </Button>
          <Button size="small" onClick={handleSignUp}>
            Cadastrar
          </Button>
        </div>

        {/* Botão Menu Mobile */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#how-it-works">Como Funciona</a>
          <a href="#technology">Tecnologia</a>
          <a href="#benefits">Benefícios</a>
          <a href="#partners">Parcerias</a>
          <a href="#contact">Contato</a>
        </div>
)}
    </header>
  );
}

export default Header;