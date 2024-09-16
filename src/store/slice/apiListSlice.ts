import {createSlice} from '@reduxjs/toolkit';
import {typeApiList} from '@/types/typeApiList'


const initialState: typeApiList = {
    count: 0,
    next: null,
    previous: null,
    results: []
};

const apiListSlice = createSlice({
    name: 'apiList',
    initialState,
    reducers: {
        setStore: (_state, action) => {
            // state.apiList = action.payload;
            return action.payload; // 直接返回新的状态对象
        }
    },
});

export const {setStore} = apiListSlice.actions;

export default apiListSlice.reducer;