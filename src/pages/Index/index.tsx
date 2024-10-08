import {useState, useEffect} from "react"
import {typeApiList} from "@/types/typeApiList.ts"
import {useRequest} from "ahooks"
import {Empty, Skeleton, Flex, Typography} from "antd";
// 接口
import getList from '@/apis/getList'
import getSearch from '@/apis/getSearch'

// 组件
import ItemList from "./components/ItemList"    // 渲染列表
import Search from "./components/Search"        // 搜索框
import Pagination from "./components/Pagination"        // 分页器

import styles from './index.module.scss'


export default function Home() {

    const [page, setPage] = useState(1) // 设置页面
    const [data, setData] = useState<typeApiList | undefined>()


    // 获取请求数据
    const {loading, error, run} = useRequest(() => getList(page), {
        manual: true,
        cacheKey: `home-index`,
        cacheTime: 1000 * 60 * 60 * 24,     // 缓存1天
        onSuccess: (response) => {
            setData(response)
        },
        onError: (error) => {
            console.log('请求失败123:', error);
        },
    })


    // 首次加载
    useEffect(() => {
        run()
    }, [page])

    // 处理搜索
    const handleSearch = (value: string) => {
        console.log('搜索值:', value);
        getSearch(value).then(res => {
            setData(res)
        })
    };

    if (loading || !data) return <Skeleton/>
    if (error) return <Empty description="获取数据失败！！"/>

    return (
        <>
            <Flex vertical wrap justify={'center'} align={'center'}>
                <Typography.Title level={3}>简心API</Typography.Title>
                <Typography.Text disabled>一个基于最新技术栈的接口平台，前端使用React+Antd等构建，后端使用Django+drf提供接口服务。</Typography.Text>
            </Flex>

            <br/>

            <div className={styles.content}>
                {/*搜索框*/}
                <Search onSearch={handleSearch}/>
                {/*渲染列表*/}
                <div>
                    {data ? (
                        <ItemList items={data.results}/>
                    ) : (
                        <Skeleton/>
                    )}
                </div>
                {/*分页器*/}
                <Pagination
                    current={page}
                    total={data.count}
                    onChange={(page) => setPage(page)}
                />
            </div>

        </>


    )
}