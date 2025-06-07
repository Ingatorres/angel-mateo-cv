    import React from 'react';
    import { motion } from 'framer-motion';
    import { cvData } from '../data';

    function Actividades() {
      const { actividadesComplementarias } = cvData;

      return (
        <motion.section
          id="actividades"
          className="my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeInUp"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-award-fill me-2"></i> Actividades Complementarias</h2>
          <ul className="list-unstyled text-dark">
            {actividadesComplementarias.map((act, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
                <i className="bi bi-award-fill me-2 text-info flex-shrink-0" style={{ fontSize: '0.8em', marginTop: '0.3em' }}></i>
                <span>{act}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      );
    }

    export default Actividades;
    