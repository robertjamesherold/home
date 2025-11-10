import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    plugins: [
        tailwindcss(),
        react({
            babel: {
                plugins: [['babel-plugin-react-compiler']],
            },
        }),
    ],
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@css': path.resolve(__dirname, 'src/css'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@badges': path.resolve(__dirname, 'src/assets/badges'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@typography': path.resolve(__dirname, 'src/typography'),
            '@ui': path.resolve(__dirname, 'src/ui'),
        },
    },
    server: {
        host: true,
        port: 5173,
        open: true,
        strictPort: true,
        proxy: {
            '/api': {
                target: process.env.VITE_API_BASE_URL,
                changeOrigin: true,
                secure: false,
            },
        },  
    },
});
