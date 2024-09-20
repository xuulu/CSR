
import {http} from '@/utils';
import type WebsiteStatement from '@/types/typeWebsiteStatement'


async function getWebsiteStatement(): Promise<WebsiteStatement> {
    return await http.get(`/website-statement/`);
}

export default getWebsiteStatement;