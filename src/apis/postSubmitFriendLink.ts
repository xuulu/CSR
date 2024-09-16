
import {http} from '@/utils';
import {typeFriendLink} from '@/types/typeApiList.ts'


function postSubmitFriendLink(data: typeFriendLink): Promise<boolean> {
    return http.post(`/friend-links/`, data)
        .then(response => {
            console.log('请求响应的数据:', response);
            return true
        })
        .catch(error => {
            // 处理请求过程中的错误
            console.error('请求出错:', error);
            return false;
        });
}

export default postSubmitFriendLink;