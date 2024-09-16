
import {http} from '@/utils';
import type {typeApiList} from '@/types/typeApiList'


/**
 * 获取页码对应的 API 列表数据
 * @param page - 要获取的页码
 * @returns 一个 Promise，当初始加载完成则解决，其类型是一个 typeApiList 对象
 */
async function getList(page: number): Promise<typeApiList> {
    return await http.get(`/api-list/?page=${page}`);
}


export default getList;