import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data';

function Actividades() {
  const { actividadesComplementarias } = cvData;

  return (
    <motion.section
      id="actividades"
      className="container my-5 p-4 bg-secondary shadow rounded-lg animate__animated animate__fadeInUp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-person-running me-2"></i> Actividades Complementarias</h2>
      <ul className="list-unstyled text-dark lead ps-md-4">
        {actividadesComplementarias.map((actividad, index) => (
          <li key={index}>
            <i className="bi bi-trophy-fill me-2"></i>{actividad}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Actividades;
