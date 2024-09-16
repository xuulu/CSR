import {Layout,Affix} from 'antd';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import styles from './index.layout.module.scss';
import {useEffect, useState} from "react";



const AppLayout: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <Layout className={styles.layout}>
            <Affix>
                <Header isMobile={isMobile}/>
            </Affix>
            <Content/>
            <Footer/>
        </Layout>

    );
};

export default AppLayout


