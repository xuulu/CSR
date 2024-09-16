
import {http} from '@/utils';
import type {Counts} from '@/types/typeCounts.ts'

async function getCounts(): Promise<Counts> {
    return await http.get(`/counts/`);
}

export default getCounts;