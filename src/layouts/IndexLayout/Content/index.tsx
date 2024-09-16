import React from "react";
import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import styles from '../index.layout.module.scss'


const Content: React.FC = React.memo(() => {
    return (
        <Layout.Content className={styles.content}>
            <Outlet/>
        </Layout.Content>
    )
})

export default Content