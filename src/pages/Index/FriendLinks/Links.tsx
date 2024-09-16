import getFriendLink from "@/components/apis/getFriendLink.ts";
import {useRequest} from "ahooks";
import {useEffect, useState} from "react";
import {Pagination, Tag} from 'antd';
import styles from '../index.module.scss'

export default function Links() {
    const [current, setCurrent] = useState(1); // 当前页码
    // 获取友链数据
    const {data, error, loading, run} = useRequest(() => getFriendLink(current), {
        manual: true, // 设置为 true 以手动触发请求
        cacheKey: 'friendLink',
        cacheTime: 1000 * 60 * 5, // 缓存5分钟
    });

    useEffect(() => {
        run();
    }, [current])
    // ahooks判断数据是否加载成功
    if (!data && loading) return <div>Loading...</div>
    if (error) return <div>获取友情链接失败，错误信息: {error.message}</div>
    if (!data) return <div>获取友情链接数据失败</div>

    return (
        <>
            <div className={styles.boxs}>
                {data.results.map((item) => (
                    <a className={styles.box} key={item.id} href={item.url} target="_blank" title={item.description}>
                            <img src={item.image} className="me-2" style={{width: '30px', height: '30px'}} alt={item.name}/>
                            <div rel="noopener noreferrer"
                               className="text-decoration-none">
                                {item.name}
                                <hr/>
                                <Tag color="magenta">{item.description}</Tag>
                            </div>
                    </a>
                ))}
            </div>
            <Pagination
                align="center"
                current={current} // 当前页码
                pageSize={10} // 每页显示的数据量,默认为10
                total={data.count} // 总数据量
                onChange={(page) => setCurrent(page)}
            />
        </>


    )
        ;
}

