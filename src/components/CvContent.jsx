    import React from 'react';
    import Perfil from './Perfil';
    import Experiencia from './Experiencia';
    import Habilidades from './Habilidades';
    import Formacion from './Formacion';
    import Referencias from './Referencias';
    import Actividades from './Actividades';

    const CvContent = React.forwardRef((props, ref) => {
      return (
        <div ref={ref} className="bg-secondary">
          <main className="container pt-5">
            <Perfil />
            <Experiencia />
            <Habilidades />
            <Formacion />
            <Referencias />
            <Actividades />
          </main>
        </div>
      );
    });

    export default CvContent;
    