import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrack} from "../types/track";

interface PlayerState {
    active: null | ITrack,
    volume: number,
    duration: number,
    currentTime: number,
    pause: boolean
}

const initialState: PlayerState = {
    currentTime: 0,
    duration: 0,
    active: null,
    volume: 0,
    pause: true
}
export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        playTrack: (state) => {
            state.pause = false
        },
        pauseTrack: (state) => {
            state.pause = true
        },
        setActive: (state, action: PayloadAction<ITrack>) => {
            state.active = action.payload
            state.duration = 0
            state.currentTime = 0
        },
        setCurrentTime: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload
        }
    }
})
export const {playTrack, pauseTrack, setActive, setCurrentTime, setVolume, setDuration} = playerSlice.actions
export default playerSlice.reducer