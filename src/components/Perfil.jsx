import React from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data'; // <--- ¡Asegúrate de que esta línea esté correcta!
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Perfil() {
  const { personal, perfilEjecutivo } = cvData;

  return (
    <motion.section
      id="perfil"
      className="container my-5 p-4 bg-light shadow rounded-lg animate__animated animate__fadeInUp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="row align-items-center g-4">
        <div className="col-auto mx-auto mx-md-0">
          <img
            src={personal.foto}
            alt="Foto de Perfil de Ángel Mateo Torres"
            className="img-fluid rounded-circle border border-info border-4 shadow-sm"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>
        <div className="col text-center text-md-start">
          <h1 className="display-4 fw-bold text-primary mb-2">
            {personal.nombre}
          </h1>
          <h2 className="h4 fw-semibold text-info mb-3">
            {personal.titulo}
          </h2>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 text-dark text-lg mb-4">
            <p className="d-flex align-items-center me-3 mb-0">
              <MapPin size={20} className="text-success me-2" /> {personal.ubicacion}
            </p>
            <a href={`mailto:${personal.email}`} className="d-flex align-items-center me-3 mb-0 text-decoration-none text-dark hover-accent">
              <Mail size={20} className="text-success me-2" /> {personal.email}
            </a>
            <p className="d-flex align-items-center mb-0">
              <Phone size={20} className="text-success me-2" /> {personal.telefonos}
            </p>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center mb-0 text-decoration-none text-dark hover-accent">
              <Linkedin size={20} className="text-success me-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-top border-info-subtle">
        <h3 className="h4 fw-bold text-primary mb-3"><i className="bi bi-person-fill me-2"></i> Perfil Ejecutivo</h3>
        <p className="lead text-dark text-justify">
          {perfilEjecutivo.trim()}
        </p>
      </div>
    </motion.section>
  );
}

export default Perfil;
