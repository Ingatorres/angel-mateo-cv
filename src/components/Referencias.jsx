import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data';

function Referencias() {
  const { referencias } = cvData;

  // Función para agrupar referencias en arrays de 3 (para el carrusel)
  const chunkArray = (arr, chunkSize) => {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize)
      R.push(arr.slice(i, i + chunkSize));
    return R;
  };

  const referenceGroups = chunkArray(referencias, 3); // Agrupa en 3 por slide

  return (
    <motion.section
      id="referencias"
      className="container my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeInUp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-people-fill me-2"></i> Referencias Profesionales</h2>
      
      <div id="referencesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {referenceGroups.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#referencesCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner pb-5">
          {referenceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}>
              <div className="row justify-content-center g-4">
                {group.map((referencia, refIndex) => (
                  <div key={refIndex} className="col-md-4 col-sm-6 d-flex">
                    <div className="card h-100 border-info-subtle shadow-sm text-center">
                      <div className="card-body">
                        <h5 className="card-title fw-bold text-primary">{referencia.nombre}</h5>
                        {referencia.cargo && <p className="card-text small text-dark mb-1">{referencia.cargo}</p>}
                        <p className="card-text small text-primary references-phone">{referencia.telefono}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#referencesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#referencesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </motion.section>
  );
}

export default Referencias;
