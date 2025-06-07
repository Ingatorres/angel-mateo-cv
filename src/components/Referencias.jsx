    import React from 'react';
    import { motion } from 'framer-motion';
    import { cvData } from '../data';

    function Referencias() {
      const { referencias } = cvData;

      const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
      };

      const referenceChunks = chunkArray(referencias, 3);

      return (
        <motion.section
          id="referencias"
          className="my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeInUp"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="h3 fw-bold text-primary mb-4 text-center"><i className="bi bi-person-lines-fill me-2"></i> Referencias Profesionales</h2>

          <div id="referencesCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {referenceChunks.map((_, index) => (
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

            <div className="carousel-inner">
              {referenceChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className={`carousel-item ${chunkIndex === 0 ? "active" : ""}`}>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {chunk.map((ref, index) => (
                      <div key={index} className="col">
                        <div className="card h-100 border-info-subtle shadow-sm">
                          <div className="card-body">
                            <h3 className="card-title h5 fw-semibold text-success mb-2">{ref.nombre}</h3>
                            <p className="card-text mb-1 text-dark">{ref.cargo}</p>
                            <p className="card-text mb-0 text-dark references-phone"><i className="bi bi-phone-fill me-2 text-info"></i>{ref.telefono}</p>
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
    