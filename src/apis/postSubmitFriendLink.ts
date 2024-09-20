
import {http} from '@/utils';
import {typeFriendLink} from '@/types/typeApiList.ts'

// function postSubmitFriendLink(data: typeFriendLink) {
//     return http.post(`/friend-links/`, data)
// }
const postSubmitFriendLink = async (data: typeFriendLink) => {

    try {
        await http.post(`/friend-links/`, data);
        return { success: true };
    } catch (error: any) {
        console.error('Error:', error.response); // 这行会打印原始错误信息
        console.error('Error:', error);
        if (error.response && error.response.status === 400) {
            return { success: false, errors: error.response.data.errors };
        }
        throw error;
    }
};


export default postSubmitFriendLink;