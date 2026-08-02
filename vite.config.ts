import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap-and-robots',
      apply: 'build',
      closeBundle() {
        execSync('node scripts/generate-sitemap.mjs', {
          stdio: 'inherit',
          cwd: __dirname,
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
