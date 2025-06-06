import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { cvData } from './data';
import CvContent from './components/CvContent';

function App() {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${cvData.personal.nombre.replace(/\s+/g, '_')}_CV_Angel_Torres`,
    pageStyle: `
      @page {
        size: Letter; /* Definido como formato CARTA */
        margin: 1cm;
      }
      body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        background-color: white !important;
        color: black !important; /* Asegurar color de texto negro en impresión */
      }
      /* Ocultar elementos de la UI en impresión */
      .fixed-top, .navbar-toggler, .btn-info {
        display: none !important;
      }
      /* Clase para el contenedor del CV para impresión */
      .print-area {
        padding-top: 0 !important;
        margin-top: 0 !important;
        box-shadow: none !important;
        background-color: white !important;
      }
      /* Asegurar que los contenedores no tengan padding extra en impresión */
      .container {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      /* Ajustes para colores y textos en impresión */
      h1, h2, h3, h4, h5, h6, .text-primary, .text-dark, .text-darkText, .text-success {
        color: black !important;
      }
      .text-info-emphasis, .text-secondary {
        color: #555 !important;
      }
      .border-info-subtle, .border-top {
        border-color: #ccc !important;
      }
      .shadow, .card {
        box-shadow: none !important;
        border: 1px solid #eee !important;
      }
      /* Estilo para foto en PDF: redonda en esquina superior derecha */
      .profile-photo-print {
        position: absolute;
        top: 1cm;
        right: 1cm;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #003B46; /* Color primario */
        display: block; /* Asegurar que se muestre en impresión */
      }
      /* Texto para el pie de página del PDF */
      .pdf-footer-text::after {
        content: "Documento elaborado por Ing. Ángel Mateo Torres – con apoyo estratégico de IA generativa.";
        display: block;
        text-align: center;
        font-size: 9px;
        margin-top: 30px; /* Espacio antes del pie de página */
        color: #555 !important;
      }
      .timeline-item {
        border-left: 1px solid #ddd !important; /* Asegurar que la línea de tiempo se vea en PDF */
      }
      .timeline-item:last-child {
        border-left: 1px solid #ddd !important; /* Asegurar que la línea de tiempo se vea en PDF */
      }
      .timeline-icon {
        box-shadow: none !important; /* Eliminar sombras en iconos de timeline en PDF */
        background-color: #eee !important; /* Color más suave para el icono en PDF */
        border: 1px solid #ccc !important;
        color: #333 !important;
      }
      .references-phone {
        color: #333 !important; /* Asegurar contraste para teléfonos en PDF */
      }
      .btn-warning { /* Ocultar el botón de LinkedIn en PDF */
        display: none !important;
      }
    `,
  });

  return (
    <div className="bg-secondary text-dark" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Encabezado fijo superior - Navbar minimalista */}
      <header className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm py-3">
        <div className="container">
          {/* Botón de descarga de CV */}
          <button
            onClick={handlePrint}
            className="btn btn-info fw-bold d-flex align-items-center me-auto order-1 order-lg-0"
            style={{ backgroundColor: 'var(--bs-info)', borderColor: 'var(--bs-info)', color: 'var(--bs-primary)' }}
          >
            <i className="bi bi-file-earmark-arrow-down me-2"></i> Descargar CV PDF
          </button>

          <button className="navbar-toggler order-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-3 order-lg-1" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white hover-accent px-lg-3 py-2" href="#perfil">Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-accent px-lg-3 py-2" href="#trayectoria">Trayectoria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-accent px-lg-3 py-2" href="#habilidades">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-accent px-lg-3 py-2" href="#formacion">Formación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-accent px-lg-3 py-2" href="#referencias">Referencias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white hover-accent px-lg-3 py-2" href="#actividades">Actividades</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <CvContent ref={componentRef} />

      {/* Pie de página */}
      <footer className="bg-primary text-light p-4 text-center small mt-5 pdf-footer-text">
        <p className="mb-0">Sitio diseñado por Ing. Ángel Torres con asistencia de Inteligencia Artificial como copiloto creativo y técnico.</p>
      </footer>
    </div>
  );
}

export default App;
