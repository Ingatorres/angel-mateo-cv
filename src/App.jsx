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
            size: Letter;
            margin: 1cm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: white !important;
            color: #333333 !important;
            font-family: 'Inter', sans-serif !important;
            margin: 0;
            padding: 0;
            display: block;
          }
          header, footer {
            display: none !important;
          }
          .text-primary { color: #003B46 !important; }
          .text-info-emphasis { color: #006C50 !important; }
          .text-success { color: #006C50 !important; }
          .text-dark { color: #333333 !important; }
          .text-muted { color: #6c757d !important; }
          .text-info { color: #7ED6A7 !important; }

          .timeline-item {
            border-left: 1px solid #ddd !important;
            padding-bottom: 10px;
          }
          .timeline-item:last-child {
            border-left: 1px solid #ddd !important;
          }
          .timeline-icon {
            box-shadow: none !important;
            background-color: #eee !important;
            border: 1px solid #ccc !important;
            color: #333 !important;
          }
          /* --- Control de Saltos de Página en PDF (según tu estructura) --- */
          /* Página 1: Perfil (ya es la primera sección, no necesita page-break-before) */
          /* Página 2: Trayectoria Profesional (necesita un salto antes si no es la primera) */
          #trayectoria { page-break-before: always; }
          /* Página 3: Habilidades & Integración IA (necesita un salto antes) */
          #habilidades { page-break-before: always; }
          /* Página 4: Formación, Referencias, Actividades (necesita un salto antes de Formación) */
          #formacion { page-break-before: always; }

          /* Asegura que los títulos de sección tengan espacio al inicio de una nueva página */
          #trayectoria h2, #habilidades h2, #formacion h2, #referencias h2, #actividades h2 {
              padding-top: 20px !important; /* Ajusta el padding superior en la nueva página */
          }

          img {
            max-width: 100% !important;
            height: auto !important;
            display: block;
          }
          .rounded-circle {
            border-radius: 50% !important;
          }
          .card {
            box-shadow: none !important;
            border: 1px solid #eee !important;
          }
          .shadow-sm {
            box-shadow: none !important;
          }
          /* Pie de página dinámico para el PDF (aparece en cada página) */
          .pdf-footer-content::after {
            content: "Documento elaborado por Ing. Ángel Mateo Torres – con apoyo estratégico de IA generativa.";
            display: block;
            position: fixed;
            bottom: 1cm;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 9px;
            color: #555 !important;
          }
        `,
      });

      return (
        <div className="bg-secondary text-dark" style={{ fontFamily: "'Inter', sans-serif" }}>
          <header className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm py-3">
            <div className="container">
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

          <footer className="bg-primary text-light p-4 text-center small mt-5 pdf-footer-content">
            <p className="mb-0">Sitio diseñado por Ing. Ángel Torres con asistencia de Inteligencia Artificial como copiloto creativo y técnico.</p>
          </footer>
        </div>
      );
    }

    export default App;
    