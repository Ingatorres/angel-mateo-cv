    import React from 'react';
    import { motion } from 'framer-motion';
    import { cvData } from '../data';

    function Formacion() {
      const { formacionAcademica, idiomas } = cvData;

      return (
        <motion.section
          id="formacion"
          className="my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeInUp"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-mortarboard-fill me-2"></i> Formación Académica & Idiomas</h2>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="h5 fw-bold text-success mb-3">Formación Académica</h3>
              {formacionAcademica.map((edu, index) => (
                <div key={index} className="mb-3">
                  <p className="fw-bold mb-0 text-dark">{edu.titulo}</p>
                  <p className="mb-0 text-muted">{edu.institucion}</p>
                  <p className="small text-muted">{edu.periodo}</p>
                  {edu.detalle && <p className="small text-dark">{edu.detalle}</p>}
                </div>
              ))}
            </div>

            <div className="col-lg-6 mb-4">
              <h3 className="h5 fw-bold text-success mb-3">Idiomas</h3>
              <ul className="list-unstyled text-dark">
                {idiomas.map((lang, index) => (
                  <li key={index} className="d-flex align-items-center mb-2">
                    <i className="bi bi-translate me-2 text-info"></i>
                    <span>{lang.idioma} - {lang.nivel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-4">
            <a
              href="https://www.linkedin.com/in/ingangmateo/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info fw-bold d-flex align-items-center justify-content-center mx-auto"
              style={{ backgroundColor: 'var(--bs-info)', borderColor: 'var(--bs-info)', color: 'var(--bs-primary)', maxWidth: '300px' }}
            >
              <i className="bi bi-award-fill me-2"></i> Ver Credenciales de LinkedIn
            </a>
          </div>
        </motion.section>
      );
    }

    export default Formacion;
    