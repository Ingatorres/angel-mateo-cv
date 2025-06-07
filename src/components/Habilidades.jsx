    import React from 'react';
    import { motion } from 'framer-motion';
    import { cvData } from '../data';

    function Habilidades() {
      const { competenciasTecnicas, competenciasIA, habilidadesTransversales, integracionHumanoIA } = cvData;

      return (
        <motion.section
          id="habilidades"
          className="container my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeInUp"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-tools me-2"></i> Habilidades & Competencias</h2>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
            <div className="col">
              <div className="card h-100 border-info-subtle shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 fw-semibold text-success mb-3">Competencias Técnicas</h3>
                  <ul className="list-unstyled text-dark">
                    {competenciasTecnicas.map((habilidad, index) => (
                      <li key={index}>
                        <i className="bi bi-check-lg me-2"></i>{habilidad}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-info-subtle shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 fw-semibold text-success mb-3">Competencias en IA</h3>
                  <ul className="list-unstyled text-dark">
                    {competenciasIA.map((competencia, index) => (
                      <li key={index}>
                        <span className="fw-bold">{competencia.titulo}:</span> {competencia.detalle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 border-info-subtle shadow-sm">
                <div className="card-body">
                  <h3 className="card-title h5 fw-semibold text-success mb-3">Habilidades Transversales</h3>
                  <ul className="list-unstyled text-dark">
                    {habilidadesTransversales.map((habilidad, index) => (
                      <li key={index}>
                        <i className="bi bi-person-check-fill me-2"></i>{habilidad}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-info-subtle rounded-lg shadow-sm border-start border-success border-4">
            <h3 className="h4 fw-bold text-primary mb-3 text-center"><i className="bi bi-robot me-2"></i> Integración Humano-IA en Proyectos Reales</h3>
            <ul className="list-unstyled text-dark">
                {integracionHumanoIA.map((item, index) => (
                    <li key={index} className="mb-2 d-flex align-items-start">
                        <i className="bi bi-robot text-primary me-2 flex-shrink-0" style={{ fontSize: '0.8em', marginTop: '0.3em' }}></i>
                        <span><span className="fw-bold">{item.texto}</span> {item.detalle}</span>
                    </li>
                ))}
            </ul>
          </div>
        </motion.section>
      );
    }

    export default Habilidades;
    