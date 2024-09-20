import React from 'react';
import {Empty, Skeleton, Typography, Watermark} from 'antd';
import WebsiteStatement from '@/apis/getWebsiteStatement'
import {useRequest} from "ahooks";


const Disclaimer: React.FC = () => {

    const {data,loading, error} = useRequest(WebsiteStatement, {
        cacheKey: `WebsiteStatement`,
        cacheTime: 1000 * 60 * 60 * 24*7,     // 缓存7天
    })

    if (loading || !data) return <Skeleton/>
    if (error) return <Empty description="获取数据失败！！"/>

    return (
        <Watermark content={['简心API', 'api.qvqa.cn']}>
            <Typography.Title level={2}>{data.title}</Typography.Title>
            {data.data.map(item => <Typography.Paragraph key={item}>{item}</Typography.Paragraph>)}
        </Watermark>
    )
}

export default Disclaimer;