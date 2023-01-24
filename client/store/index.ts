import {configureStore} from "@reduxjs/toolkit";
import playerSlice from "./playerSlice";
import {createWrapper} from "next-redux-wrapper";
import {useDispatch, useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import {tracksApi} from "../services/tracksApi";

export const store = () => configureStore({
    reducer: {
        player: playerSlice,
        [tracksApi.reducerPath]: tracksApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tracksApi.middleware)
})

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const wrapper = createWrapper<AppStore>(store)