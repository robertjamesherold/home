import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const rootDir = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
    ],
    base: "./",
    resolve: {
        alias: {
            '@': resolve(rootDir, 'src'),
            '@css': resolve(rootDir, 'src/css'),
            '@assets': resolve(rootDir, 'src/assets'),
            '@badges': resolve(rootDir, 'src/assets/badges'),
            '@components': resolve(rootDir, 'src/components'),
            '@icons': resolve(rootDir, 'src/assets/icons'),
            '@images': resolve(rootDir, 'src/assets/images'),
            '@features': resolve(rootDir, 'src/features'),
            '@hooks': resolve(rootDir, 'src/hooks'),
            '@layout': resolve(rootDir, 'src/layout'),
            '@pages': resolve(rootDir, 'src/pages'),
            '@types': resolve(rootDir, 'src/types'),
            '@typography': resolve(rootDir, 'src/typography'),
            '@ui': resolve(rootDir, 'src/ui'),
        },
    },
    server: {
        host: true,
        port: 5173,
        open: true,
    },
});
