    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      // **¡MUY IMPORTANTE!** La base de tu despliegue para GitHub Pages.
      // Debe ser el nombre EXACTO de tu repositorio de GitHub, rodeado por diagonales.
      // Por ejemplo, si tu repositorio se llama 'angel-mateo-cv', la línea es:
      base: '/angel-mateo-cv/', // <--- ¡Confirma que 'angel-mateo-cv' es el nombre exacto de tu repositorio!
      build: {
        outDir: 'dist', // La carpeta de salida por defecto para los archivos compilados
      }
    });
    