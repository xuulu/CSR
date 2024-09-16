
import React from 'react';
import { Pagination } from 'antd';

interface Props {
    current: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
}

const AppPagination: React.FC<Props> = ({ current, total, onChange }) =>
    <Pagination
        align='center'               // 对齐方式     start | center | end
        current={current}	         //当前页数
        pageSize={18}                 // 每页显示的条目数
        total={total}                // 数据总数
        onChange={onChange}          // 点击页码的回调
        // defaultCurrent={1}           // 默认的当前页数1
        // hideOnSinglePage={true}     // 只有一页时，不显示分页器
/>


export default AppPagination;