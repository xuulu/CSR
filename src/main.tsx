import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.scss'

// 提供一个可以安全修改document标题和meta标签的上下文
import {HelmetProvider} from 'react-helmet-async'


createRoot(document.getElementById('root')!).render(
    // 包裹应用程序，确保在开发和生产环境中都能获得一致的行为
    <StrictMode>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </StrictMode>,
)
