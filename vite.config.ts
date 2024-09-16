import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {join} from 'path'

import viteCompression from 'vite-plugin-compression';      //导入Vite的压缩插件
import dynamicImport from 'vite-plugin-dynamic-import';     //导入Vite的动态导入插件
import { visualizer } from 'rollup-plugin-visualizer';      //导入Rollup的可视化分析插件

export default defineConfig({
    plugins: [
        react(),
        // 启用gzip压缩
        viteCompression({
            algorithm:'gzip',
            ext:'.gz'
        }),
        // 启用代码分割和动态导入
        dynamicImport(),
        // 可视化分析插件
        visualizer({
            // 生成的分析报告的文件名，默认为'stats.html'
            filename: 'stats.html',
            // 是否在生成报告后自动打开浏览器，默认为false
            open: true,
            // 是否显示 gzip 压缩后的文件大小，默认为 false
            gzipSize: true,
            // 是否显示 brotli 压缩后的文件大小，默认为 false
            brotliSize: true,
            // 是否开启调试模式，默认为 false
            emitFile: true,
        }),

    ],
    resolve: {
        alias: {
            '@': join(__dirname, 'src')
        }
    },
    server: {
        proxy: {
            '/api': {
                target: "https://api.qvqa.cn", //'http://localhost:8000/',
                changeOrigin: true,
            }
        }
    },
    build: {
        cssCodeSplit: true,
        minify: 'terser',
        rollupOptions: {
            // 将react和react-dom等标记为外部依赖(CDN)，不打包进输出文件
            external: ['react','react-dom','react-redux','react-redux-dom','axios'],
        },

    }

})
