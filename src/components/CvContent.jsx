import React from 'react';
// Importa todos los componentes de sección de tu CV
import Perfil from './Perfil';
import Experiencia from './Experiencia';
import Habilidades from './Habilidades'; // <--- ¡Esta línea importa el componente Habilidades!
import Formacion from './Formacion';
import Referencias from './Referencias';
import Actividades from './Actividades';

// Componente CvContent que contendrá todas las secciones del CV
// Este componente es el que será "imprimible" por react-to-print
const CvContent = React.forwardRef((props, ref) => {
  return (
    // Contenedor principal del contenido del CV con clases de Bootstrap para el diseño y la impresión
    <div ref={ref} className="bg-secondary p-4 pt-5 pt-md-0 print-area">
      {/* Etiqueta <main> para el contenido principal del documento */}
      <main className="container pt-5">
        {/* Renderiza cada uno de los componentes de sección del CV */}
        <Perfil />
        <Experiencia />
        <Habilidades /> {/* Renderiza el componente Habilidades aquí */}
        <Formacion />
        <Referencias />
        <Actividades />
      </main>
    </div>
  );
});

export default CvContent; // Exporta CvContent como el componente por defecto
