
import {http} from '@/utils';
import {typeFriendLinks} from '@/types/typeApiList.ts'

async function getFriendLink(page: number): Promise<typeFriendLinks> {
    return await http.get(`/friend-links/?page=${page}`);
}

export default getFriendLink;