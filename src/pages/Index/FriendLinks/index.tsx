import {useEffect, useState} from "react";
import {Empty, Skeleton, Watermark, Typography, Button, Modal} from 'antd';
import ItemList from '../components/ItemList'
import {useRequest} from "ahooks";
import getFriendLink from "@/apis/getFriendLink";

import Pagination from "@/pages/Index/components/Pagination.tsx";
// import SubmitFriendLink from './SubmitFriendLink'

export default function FriendLinks() {
    const [page, setPage] = useState(1) // 设置页面
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 获取请求数据
    const {data, loading, error, run} = useRequest(() => getFriendLink(page), {
        manual: true,
        // cacheKey: `FriendLinks`,
        // cacheTime: 1000 * 60 * 60 * 24,     // 缓存1天
    })
    // 首次加载
    useEffect(() => {
        run()
    }, [page])

    if (loading || !data) return <Skeleton/>
    if (error) return <Empty description="获取数据失败！！"/>


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Watermark content={['简心API', 'api.qvqa.cn']}>


            <Typography.Title level={2}>友情链接:</Typography.Title>
            <Button type="primary" onClick={showModal}>
                申请友链
            </Button>
            <Modal title="申请友链" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {/*<SubmitFriendLink />*/}
                <Typography.Title level={4}>要求：</Typography.Title>
                <Typography.Paragraph>
                    <ul>
                        <li>
                            1、接口相关网站
                        </li>
                        <li>
                            2、域名备案网站优先
                        </li>
                        <li>
                            3、其他见网站声明
                        </li>

                    </ul>
                </Typography.Paragraph>
                <Typography.Text type="success">QQ申请：1634964</Typography.Text><br/>
                <Typography.Text type="danger">邮箱申请(推荐)：1634964@qq.com</Typography.Text>

            </Modal>


            <ItemList items={data.results}/>
            {/*分页器*/}
            <Pagination
                current={page}
                total={data.count}
                onChange={(page) => setPage(page)}
            />
        </Watermark>
    )
}