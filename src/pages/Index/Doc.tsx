import {useEffect} from 'react';
import queryApi from '@/apis/queryApi'
import {useParams, useNavigate} from 'react-router-dom'
import {useRequest} from 'ahooks'
import {Spin, Descriptions, Table} from 'antd'
import {Helmet} from "react-helmet-async";

const Doc: React.FC = () => {
    const {id} = useParams()
    const navigate = useNavigate();

    const {data, error, run} = useRequest(
        () => queryApi(id as string),
        {
            cacheKey: `doc-${id}`,
            cacheTime: 1000 * 60 * 60 * 24,     // 缓存1天
            manual: true,                       // 设置为手动触发
        }
    )

    useEffect(() => {
        run(); // 调用 run 方法来执行请求
    }, [id, run])

    if (!data) {
        return <Spin/>
    }

    if (!data && error) {
        navigate('/404')
        return null
    }


    // 表格配置
    const columns = [
        {
            title: '参数',
            dataIndex: 'parameter',
            key: 'parameter',
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '必填',
            dataIndex: 'required',
            key: 'required',
            render: (required: boolean) => (required ? '是' : '否'),
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
        },

    ];

    const source = () => {
        const initialSource = [
            {
                parameter: 'type',
                type: 'string',
                required: true,
                description: '全局参数,支持json|image|video等'
            }]
        if (data.requestParameters) {
            const requestParameters = JSON.parse(data.requestParameters);
            if (Array.isArray(requestParameters)) {
                initialSource.push(
                    ...requestParameters
                );
            }
        }
        return initialSource
    }

    return (
        <>
            <Helmet>
                <title>接口文档 - {data.name}</title>
            </Helmet>

            <Descriptions
                title ='接口文档'
                bordered
                column={{xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1}}
                layout='vertical'
            >
                <Descriptions.Item label="接口名称">{data.name}</Descriptions.Item>
                <Descriptions.Item label="请求地址">
                    <a target="_blank"
                       href={`https://api.qvqa.cn/api/${data.path}`}>{`https://api.qvqa.cn/api/${data.path}`}</a>
                </Descriptions.Item>
                <Descriptions.Item label="请求示例">
                    <a target="_blank"
                       href={`https://api.qvqa.cn/api/${data.path}/${data.urlExample}`}>{`https://api.qvqa.cn/api/${data.urlExample}`}</a>
                </Descriptions.Item>
                <Descriptions.Item label="接口类型">{data.type}</Descriptions.Item>
                <Descriptions.Item label="接口说明">
                    <div>{data.introduce}</div>
                </Descriptions.Item>
                <Descriptions.Item label="请求参数">
                    <Table
                        columns={columns}
                        dataSource={source()}
                        rowKey="parameter"
                        pagination={false}
                    />
                </Descriptions.Item>
            </Descriptions>


            {/*<h3>响应参数</h3>*/}
            {/*<Table*/}
            {/*    columns={columns}*/}
            {/*    dataSource={apiInfo.responseParams}*/}
            {/*    rowKey="name"*/}
            {/*    pagination={false}*/}
            {/*/>*/}

        </>
    )
}

export default Doc