import React from "react";
import {Layout, Affix} from 'antd';
import {Outlet} from "react-router-dom";

import Header from "./Header";
import styles from './index.layout.module.scss';


const AppLayout: React.FC = () => {

    return (
        <Layout className={styles.layout}>
            <Affix>
                <Header/>
            </Affix>

            <Layout.Content className={styles.content}>
                <Outlet/>
            </Layout.Content>

            <Layout.Footer className={styles.footer}>
                ©{new Date().getFullYear()} Created by 简心API
            </Layout.Footer>
        </Layout>

    )
}
export default AppLayout


