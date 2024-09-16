
import {http} from '@/utils';
import type {typeApiList} from '@/types/typeApiList.ts'

async function getSearch(msg: string): Promise<typeApiList> {
    return await http.get(`/api-list/?search=${msg}`);
}

export default getSearch;