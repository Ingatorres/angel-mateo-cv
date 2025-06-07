    import React from 'react';
    import { motion } from 'framer-motion';
    import { cvData } from '../data';

    function Experiencia() {
      const { trayectoriaProfesional } = cvData;

      return (
        <motion.section
          id="trayectoria"
          className="my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeInUp"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-briefcase-fill me-2"></i> Trayectoria Profesional</h2>
          <div className="timeline">
            {trayectoriaProfesional.map((exp, index) => (
              <div key={index} className="timeline-item mb-4">
                <div className="timeline-icon"><i className="bi bi-briefcase-fill"></i></div>
                <div className="card h-100 border-info-subtle shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title h5 fw-semibold text-success">{exp.cargo} en {exp.empresa}</h3>
                    <p className="card-subtitle mb-2 text-muted">{exp.periodo}</p>
                    <ul className="list-unstyled mb-0 text-dark">
                      {exp.descripcion.map((item, i) => (
                        <li key={i} className="d-flex align-items-start mb-1">
                          <i className="bi bi-check-lg me-2 text-info flex-shrink-0" style={{ fontSize: '0.8em', marginTop: '0.3em' }}></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      );
    }

    export default Experiencia;
    