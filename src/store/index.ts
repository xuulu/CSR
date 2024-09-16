
import { configureStore } from '@reduxjs/toolkit';
// 切片
import counterSlice from './slice/countes';
import apiListSlice from './slice/apiListSlice';




const store = configureStore({
    reducer: {
        /* reducers */
        counter: counterSlice,
        apiList:apiListSlice,

    }
});


export type rootState = ReturnType<typeof store.getState>;
export default store;