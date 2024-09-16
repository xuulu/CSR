import React, {useEffect, useState} from "react";
import {Affix, Button, Dropdown, Layout, Menu} from "antd";
import type {MenuProps} from 'antd'
import {MenuUnfoldOutlined} from '@ant-design/icons'
import {Link, useNavigate} from "react-router-dom";
import styles from '../index.layout.module.scss'

type MenuItem = Required<MenuProps>['items'][number];


// 菜单项定义
const items: MenuItem[] = [
    {key: "index", label: <Link to="/index">首页</Link>},
    {key: "friendshipLink", label: <Link to="/friendshipLink">友情链接</Link>},
    {key: "disclaimer", label: <Link to="/disclaimer">免责声明</Link>},
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

interface Props {
    isMobile: boolean;
}

const Content: React.FC<Props> = ({isMobile}) => {
    const [current, setCurrent] = useState('index');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
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

export default Content;
