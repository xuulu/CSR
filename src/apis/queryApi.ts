

import {http} from '@/utils';
import type{ typeList } from '@/types/typeApiList.ts'

async function queryApi(id: string): Promise<typeList> {
    return await http.get(`/api-list/${id}`);
}


export default queryApi