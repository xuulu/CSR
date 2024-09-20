import {Table, TableColumnsType, Tag, Typography} from 'antd';
import {GithubOutlined} from '@ant-design/icons';

interface Api {
    id: number;
    name: string;
    description: string;
    method: string;
    url: string;
}

const columns: TableColumnsType<Api> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',

    },
    {
        title: '接口名称',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description',

    },
    {
        title: '请求方法',
        dataIndex: 'method',
        key: 'method',
        render: (method: string) => (
            <Tag color={method === 'GET' ? 'green' : 'red'}>{method}</Tag>
        ),

    },
    {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
    }
];


const initialApis: Api[] = [
    {
        id: 1,
        name: 'API列表',
        description: '获取所有API列表',
        method: 'GET',
        url: 'api-list/',
    },
    {
        id: 2,
        name: '友情链接',
        description: '展示和提交友情链接',
        method: 'GET/POST',
        url: 'friend-links/',
    },
    {
        id: 3,
        name: '网站声明',
        description: '使用说明和免责条款',
        method: 'GET',
        url: 'website-statement/',
    },
];

const ApiListPage: React.FC = () => {

    return (
        <div style={{maxWidth: 800, margin: '0 auto', padding: '20px'}}>
            <h1>前端接口列表</h1><br/>
            <Typography.Text>
                使用前，请先了解<Typography.Link target="_blank"
                href='https://www.runoob.com/w3cnote/restful-architecture.html' >"REST"</Typography.Link>接口风格
            </Typography.Text>
            <br/>
            <Typography.Text>
                前端代码开源地址：（写的又烂又臭）<Typography.Link target="_blank"
                href='https://github.com/xuulu/CSR'><GithubOutlined/>点击查看</Typography.Link>
            </Typography.Text>
            <br/>
            <Typography.Text type="danger">
                欢迎学习前端框架的小白或大佬，
                无偿<Typography.Text type="danger" delete>修改</Typography.Text>(重写)本网站(https://api.qvqa.cn/)前端代码，
                不限技术语言，
                QQ：1634964
            </Typography.Text>
            <br/>
            <br/>
            <Table
                dataSource={initialApis}
                columns={columns}
                rowKey={(record) => record.id.toString()}
            />
        </div>
    );
};

export default ApiListPage;
