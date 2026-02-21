// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///home/project/vite.config.ts";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [
    react(),
    {
      name: "copy-public-selective",
      apply: "build",
      async generateBundle() {
        const publicDir = path.join(__dirname, "public");
        const files = fs.readdirSync(publicDir);
        for (const file of files) {
          const filePath = path.join(publicDir, file);
          try {
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
              const content = fs.readFileSync(filePath);
              this.emitFile({
                type: "asset",
                fileName: file,
                source: content
              });
            }
          } catch (e) {
          }
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    copyPublicDir: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcblxuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHtcbiAgICAgIG5hbWU6ICdjb3B5LXB1YmxpYy1zZWxlY3RpdmUnLFxuICAgICAgYXBwbHk6ICdidWlsZCcsXG4gICAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZSgpIHtcbiAgICAgICAgY29uc3QgcHVibGljRGlyID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuICAgICAgICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHB1YmxpY0Rpcik7XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHVibGljRGlyLCBmaWxlKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGZpbGVQYXRoKTtcbiAgICAgICAgICAgIGlmIChzdGF0LmlzRmlsZSgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICAgICAgICAgICAgICB0aGlzLmVtaXRGaWxlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXNzZXQnLFxuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBmaWxlLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogY29udGVudCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gU2tpcCBpbmFjY2Vzc2libGUgZmlsZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBSm9HLElBQU0sMkNBQTJDO0FBTW5MLElBQU0sWUFBWSxLQUFLLFFBQVEsY0FBYyx3Q0FBZSxDQUFDO0FBRTdELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNLGlCQUFpQjtBQUNyQixjQUFNLFlBQVksS0FBSyxLQUFLLFdBQVcsUUFBUTtBQUMvQyxjQUFNLFFBQVEsR0FBRyxZQUFZLFNBQVM7QUFFdEMsbUJBQVcsUUFBUSxPQUFPO0FBQ3hCLGdCQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsSUFBSTtBQUMxQyxjQUFJO0FBQ0Ysa0JBQU0sT0FBTyxHQUFHLFNBQVMsUUFBUTtBQUNqQyxnQkFBSSxLQUFLLE9BQU8sR0FBRztBQUNqQixvQkFBTSxVQUFVLEdBQUcsYUFBYSxRQUFRO0FBQ3hDLG1CQUFLLFNBQVM7QUFBQSxnQkFDWixNQUFNO0FBQUEsZ0JBQ04sVUFBVTtBQUFBLGdCQUNWLFFBQVE7QUFBQSxjQUNWLENBQUM7QUFBQSxZQUNIO0FBQUEsVUFDRixTQUFTLEdBQUc7QUFBQSxVQUVaO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLEVBQ2pCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
