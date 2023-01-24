import { Grid, Box } from '@mui/material';
import React from 'react';
import {ITrack} from "../types/track";
import TrackItem from "./TrackItem";

interface TrackListProps {
    tracks: ITrack[]
}
const TrackList = ({tracks}: TrackListProps) => {
    return (
        <Grid>
            <Box p={2}>
                {tracks.map(track => <TrackItem key={track._id} track={track}/>)}
            </Box>
        </Grid>
    );
};

export default TrackList;