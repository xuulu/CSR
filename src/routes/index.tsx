
import {Suspense, lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from '@/ui/Loading'

// 布局组件
import IndexLayout from '@/layouts/IndexLayout'

// 懒加载组件
const HomeLayout = lazy(() => import('@/layouts/HomeLayout'));
const Index = lazy(() => import('@/pages/Index'));
const Doc = lazy(() => import('@/pages/Index/Doc'));
const Disclaimer = lazy(() => import('@/pages/Index/Disclaimer'));
const FriendLinks = lazy(() => import('@/pages/Index/FriendLinks'));

const App404 = lazy(() => import('@/pages/error/404'));



function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {/*跟路由 '/' */}
                    <Route path="/" element={<HomeLayout/>}/>
                    {/*首页 '/index' */}
                    <Route element={<IndexLayout/>}>
                        <Route path="/index" element={<Index />}/>
                        <Route path="/doc/:id" element={<Doc />}/>
                        <Route path="/disclaimer" element={<Disclaimer/>}/>
                        <Route path="/friendshipLink" element={<FriendLinks/>}/>
                    </Route>

                    {/* 泛型路由，用于处理未找到的页面 */}
                    <Route path="*" element={<App404 />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRoutes;

