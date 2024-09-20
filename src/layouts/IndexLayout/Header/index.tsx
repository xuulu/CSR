import React, {useState} from "react";
import {Button, Dropdown, Layout, Menu} from "antd";
import type {MenuProps} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import {Link, useNavigate} from "react-router-dom";
import useIsMobile from "@/hooks/userIsMobile"
import styles from '../index.layout.module.scss'


type MenuItem = Required<MenuProps>['items'][number];
// 菜单项定义
const items: MenuItem[] = [
    {key: "/index", label: '首页'},
    {key: "/index/friendshipLink", label: '友情链接'},
    {key: "/index/web-api", label: '前端接口'},
    {key: "/index/disclaimer", label: '网站声明'},
    {
        key: "external",
        label: "外部链接",
        children: [
            {
                key: "external-feedback", // 使用字符串常量
                label: <a href="https://docs.qq.com/form/page/DV1Jqcm1taG92aWlF" rel="noopener noreferrer"
                          target="_blank">匿名反馈</a>,
            },
            {
                key: "external-app", // 使用字符串常量
                label: <a href="https://www.123pan.com/s/TiZKVv-G0GN3.html" rel="noopener noreferrer"
                          target="_blank">本站app</a>,
            }
        ]
    }
];



const Header: React.FC = () => {
    const navigate = useNavigate()
    const isMobile = useIsMobile()
    const [current, setCurrent] = useState('index');


    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        navigate(e.key)
        if (!e.key.startsWith('external')) {
            navigate(e.key);
        }
    };



    return (
        <Layout.Header className={styles.header}>
            <Link to={'/index'} className={styles.logo}>简心API</Link>
            {isMobile ? (
                <Dropdown menu={{items, onClick}} placement="bottomRight">
                    <Button type={'primary'}><MenuUnfoldOutlined/></Button>
                </Dropdown>
            ) : (
                <Menu
                    theme={'light'}
                    mode="horizontal"
                    onClick={onClick}
                    selectedKeys={[current]}
                    items={items}
                    triggerSubMenuAction={'click'}
                />
            )}
        </Layout.Header>
    );
};

export default Header;
