import React from 'react';
import {ITrack} from "../types/track";
import styles from "../styles/TrackItem.module.scss"
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {useRouter} from "next/router";

interface TrackItemProps {
    track: ITrack,
    active?: boolean
}

const TrackItem = ({track, active}: TrackItemProps) => {
    const router = useRouter()

    // const play = () => {
    //     if (pause) {
    //
    //     }
    // }
    return (
        <Card className={styles.track} onClick={() => router.push("/tracks/"+track._id)}>
            {/*<IconButton onClick={}>*/}
            {/*    /!*{!pause*!/*/}
            {/*    /!*    ? <PlayArrow/>*!/*/}
            {/*    /!*    : <Pause/>*!/*/}
            {/*    /!*}*!/*/}
            {/*</IconButton>*/}
            <img width={70} height={70} src={track.picture} alt=""/>
            <Grid container direction="column" className={styles.track__description}>
                <div>{track.name}</div>
                <div>{track.artist}</div>
            </Grid>
            {active && <div></div>}
            <IconButton className={styles.track__delete}>
                <Delete/>
            </IconButton>
        </Card>
    );
};

export default TrackItem;