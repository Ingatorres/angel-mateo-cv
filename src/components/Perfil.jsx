    import React from 'react';
    import { motion } from 'framer-motion';
    import { cvData } from '../data';

    function Perfil() {
      const { personal, perfilEjecutivo } = cvData;

      return (
        <motion.section
          id="perfil"
          className="my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeIn"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={personal.foto}
                alt="Foto de Perfil"
                className="img-fluid rounded-circle shadow-sm"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/cccccc/333333?text=Tu+Foto'; }}
              />
            </div>
            <div className="col-md-8 text-md-start mt-4 mt-md-0">
              <h1 className="display-5 fw-bold text-primary mb-2">{personal.nombre}</h1>
              <h2 className="lead text-info-emphasis mb-3">{personal.titulo}</h2>
              <p className="text-dark text-justify">{perfilEjecutivo}</p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-4">
                <span className="d-flex align-items-center text-dark"><i className="bi bi-geo-alt-fill me-2 text-primary"></i> {personal.ubicacion}</span>
                <span className="d-flex align-items-center text-dark"><i className="bi bi-envelope-fill me-2 text-primary"></i> <a href={`mailto:${personal.email}`} className="text-decoration-none text-dark">{personal.email}</a></span>
                <span className="d-flex align-items-center text-dark"><i className="bi bi-phone-fill me-2 text-primary"></i> {personal.telefonos}</span>
                {personal.linkedin && personal.linkedin !== "" && (
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm d-flex align-items-center">
                    <i className="bi bi-linkedin me-2"></i> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      );
    }

    export default Perfil;
    