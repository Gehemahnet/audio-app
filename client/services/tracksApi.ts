import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";
import {ITrack} from "../types/track";

export const tracksApi = createApi({
    reducerPath: "playerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/tracks"
    }),
    extractRehydrationInfo(action, {reducerPath}) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getAllTracks: builder.query<ITrack[], void>({
            query: () => ''
        }),
        getTrack: builder.query({
            query: (track) => `/${track.id}`
        }),
        createTrack: builder.mutation({
            query: (body) => ({
                url: '',
                method: 'POST',
                body
            })
        })

    }),
})
export const {
    useGetAllTracksQuery, useGetTrackQuery, useCreateTrackMutation
} = tracksApi