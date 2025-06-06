import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let base = '/';
try {
  const packageJsonPath = resolve(__dirname, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  if (packageJson.homepage) {
    const url = new URL(packageJson.homepage);
    base = url.pathname;
    if (!base.endsWith('/')) {
      base += '/';
    }
  } else {
    base = '/angel-mateo-cv/'; // <-- ¡AJUSTA ESTO CON EL NUEVO NOMBRE DE TU REPOSITORIO!
  }
} catch (error) {
  console.warn("No se pudo leer package.json para determinar la base, usando la ruta por defecto.");
  base = '/angel-mateo-cv/'; // Fallback si hay un error
}

export default defineConfig({
  plugins: [react()],
  base: base,
})
