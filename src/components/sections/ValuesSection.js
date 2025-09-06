import React from 'react';
import './ValuesSection.css';
import { FaAward, FaLeaf, FaLightbulb, FaUsers } from 'react-icons/fa';

const valuesData = [
  {
    icon: <FaAward />,
    title: 'Credibilidade',
    description: 'Certificação baseada em dados verificáveis e auditoria independente.',
    color: 'green'
  },
  {
    icon: <FaLeaf />,
    title: 'Sustentabilidade',
    description: 'Promovendo práticas ambientalmente responsáveis na Amazônia.',
    color: 'green'
  },
  {
    icon: <FaLightbulb />,
    title: 'Inovação',
    description: 'Tecnologia blockchain de ponta para soluções sustentáveis.',
    color: 'blue'
  },
  {
    icon: <FaUsers />,
    title: 'Inclusão Social',
    description: 'Incluindo comunidades locais no desenvolvimento econômico.',
    color: 'purple'
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