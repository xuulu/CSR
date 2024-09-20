import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {join} from 'path'
import cdn from 'vite-plugin-cdn-import'        // 从 CDN 加载 modules 的 vite 插件



export default defineConfig({
    plugins: [
        react(),
        cdn({
            enableInDevMode: true,
            modules: [
                {
                    name: 'react',
                    var: 'React',
                    path: 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.2.0/umd/react.development.min.js'
                },
                {
                    name: 'react-dom',
                    var: 'ReactDOM',
                    path: 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react-dom/18.2.0/umd/react-dom.development.min.js'
                },
                {
                    name: 'axios',
                    var: 'axios',
                    path: 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/axios/0.26.0/axios.min.js'
                },
            ]
        })
    ],
    resolve: {
        alias: {
            '@': join(__dirname, 'src')
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000/',       //"https://api.qvqa.cn",
                changeOrigin: true,
            }
        }
    },
    build: {
        // minify: false,
        minify: 'terser',
        cssCodeSplit: true,
        rollupOptions: {
            external: ['react', 'react-dom','axios'],
            // 分割打包文件
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },

    }
})
