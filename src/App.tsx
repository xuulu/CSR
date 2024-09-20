import {useEffect} from "react"
import AppRoutes from '@/routes'
import {Helmet} from 'react-helmet-async'


export default function App() {

    useEffect(() => {
        const start = performance.now();
        return () => {
            const end = performance.now();
            const duration = end - start;
            console.log('首次渲染加载完JS的时间:', duration, '毫秒');
        };
    }, []);


    return (
        <>
            <Helmet>
                <title>简心API</title>
                <script>
                    {`
                        var _hmt = _hmt || [];
                        (function() {
                          var hm = document.createElement("script");
                          hm.src = "https://hm.baidu.com/hm.js?3e3d3318e21df3616566bd35421e80c7";
                          var s = document.getElementsByTagName("script")[0]; 
                          s.parentNode.insertBefore(hm, s);
                        })();
                    `}
                </script>
                <script>
                    {'!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3Gow8eLDkIxWArn5",ck:"3Gow8eLDkIxWArn5",autoTrack:true,hashMode:true,screenRecord:true});'}
                </script>
            </Helmet>
            <AppRoutes/>
        </>


    )
}