import React from 'react';
import './ValuesSection.css';
// Importe os ícones da react-icons que vamos usar
import { FaAward, FaLeaf, FaLightbulb, FaUsers } from 'react-icons/fa';

// Array com os dados de cada valor para facilitar a manutenção
const valuesData = [
  {
    icon: <FaAward />,
    title: 'Credibilidade',
    description: 'Certificação baseada em dados verificáveis e auditoria independente.',
    color: 'green' // Cor para o ícone
  },
  {
    icon: <FaLeaf />,
    title: 'Sustentabilidade',
    description: 'Promovendo práticas ambientalmente responsáveis na Amazônia.',
    color: 'green' // Mesmo verde do design
  },
  {
    icon: <FaLightbulb />,
    title: 'Inovação',
    description: 'Tecnologia blockchain de ponta para soluções sustentáveis.',
    color: 'blue' // Azul para o ícone
  },
  {
    icon: <FaUsers />,
    title: 'Inclusão Social',
    description: 'Incluindo comunidades locais no desenvolvimento econômico.',
    color: 'purple' // Roxo para o ícone
  }
];

function ValuesSection() {
  return (
    <section id="values" className="values-section">
      <div className="values-content">
        <h2 className="section-title">Nossos Valores</h2>
        
        <div className="values-grid">
          {valuesData.map((value, index) => (
            <div key={index} className="value-card">
              <div className={`value-icon-wrapper icon-${value.color}`}>
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;