import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data';

function Formacion() {
  const { formacionAcademica, idiomas } = cvData; // Asegúrate de incluir idiomas

  return (
    <motion.section
      id="formacion"
      className="container my-5 p-4 bg-secondary shadow rounded-lg animate__animated animate__fadeInUp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-mortarboard-fill me-2"></i> Formación Académica & Idiomas</h2>
      
      {/* Formación Académica */}
      <div className="mb-5">
        <h3 className="h5 fw-bold text-success mb-3">Formación Académica</h3>
        {formacionAcademica.map((formacion, index) => (
          <div key={index} className="card border-0 shadow-sm mb-3">
            <div className="card-body d-flex flex-column flex-md-row align-items-md-center g-3">
              <div className="flex-shrink-0 me-md-4">
                <p className="h5 fw-semibold text-info mb-0">{formacion.periodo}</p>
              </div>
              <div className="flex-grow-1">
                <h4 className="h5 fw-bold text-primary mb-1">{formacion.titulo}</h4>
                <p className="text-dark mb-1">{formacion.institucion}</p>
                {formacion.detalle && <p className="text-secondary small mb-0">{formacion.detalle}</p>}
                {formacion.titulo === "Cursos en IA" && (
                  <a href="https://www.linkedin.com/in/ingangmateo/details/certifications/" target="_blank" rel="noopener noreferrer" className="btn btn-warning btn-sm mt-2">
                      <i className="bi bi-linkedin me-2"></i> Ver Credenciales en LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Idiomas */}
      <div>
        <h3 className="h5 fw-bold text-success mb-3">Idiomas</h3>
        <ul className="list-unstyled text-dark">
          {idiomas.map((idioma, index) => (
            <li key={index}>
              <i className="bi bi-globe me-2"></i>
              <span className="fw-bold">{idioma.idioma}:</span> {idioma.nivel}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Formacion;
