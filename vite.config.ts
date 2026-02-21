import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-public-selective',
      apply: 'build',
      async generateBundle() {
        const publicDir = path.join(__dirname, 'public');
        const files = fs.readdirSync(publicDir);

        for (const file of files) {
          const filePath = path.join(publicDir, file);
          try {
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
              const content = fs.readFileSync(filePath);
              this.emitFile({
                type: 'asset',
                fileName: file,
                source: content,
              });
            }
          } catch (e) {
            // Skip inaccessible files
          }
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    copyPublicDir: false,
  },
});
