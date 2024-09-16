// 请求参数
export interface requestParameters {
    parameter: string;
    type: string;
    required: boolean;
    description: string;
}


// 接口列表
export interface typeList {
    id: number;
    name: string;
    path: string;
    type: string;
    urlExample: string;
    introduce: string;
    requestParameters: string;
    returnParameters: string;
}

// 接口列表
export interface typeApiList {
    count: number,
    next: number | null,
    previous: number | null,
    results: typeList[]
}

// 单个友链
export interface typeFriendLink {
    id?: number;
    name: string;
    url: string;
    image: string;
    description: string;
    email: string;
    is_approved?: boolean;
}


// 友链列表
export interface typeFriendLinks {
    count: number,
    next: number | null,
    previous: number | null,
    results: typeFriendLink[]
}

