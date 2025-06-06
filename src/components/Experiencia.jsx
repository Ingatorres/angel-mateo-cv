import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data';

function Experiencia() {
  const { trayectoriaProfesional } = cvData;

  return (
    <motion.section
      id="trayectoria"
      className="container my-5 p-4 bg-secondary shadow rounded-lg animate__animated animate__fadeInUp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-briefcase-fill me-2"></i> Trayectoria Profesional</h2>
      <div className="timeline">
        {trayectoriaProfesional.map((experiencia, index) => (
          <div key={index} className="timeline-item d-flex mb-4">
            <div className="timeline-icon me-3">
              <span className="badge bg-info rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>✓</span>
            </div>
            <div className="timeline-content flex-grow-1">
              <h3 className="h5 fw-bold text-primary mb-1">
                {experiencia.cargo} en {experiencia.empresa}
              </h3>
              <p className="text-info-emphasis small mb-2">{experiencia.periodo}</p>
              <ul className="list-unstyled text-dark ps-3">
                {experiencia.descripcion.map((item, i) => (
                  <li key={i}>
                    <i className="bi bi-dot me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experiencia;
