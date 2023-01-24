import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import React, {ChangeEvent, useEffect} from "react";
import styles from "../styles/Player.module.scss"
import TrackProgress from "./TrackProgress";
import {useAppDispatch, useAppSelector} from "../store";
import {playTrack, pauseTrack, setActive, setCurrentTime, setDuration, setVolume} from "../store/playerSlice"
const Player = () => {
    let audio: HTMLAudioElement
    const dispatch = useAppDispatch()
    const {pause, volume, currentTime,active, duration} = useAppSelector(state => state.player)
    const play = () => {
        if (pause) {
            dispatch(playTrack())
            // audio.play()
        } else {
            dispatch(pauseTrack())
            audio.pause()
        }
    }
    const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }
    const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }
    const setAudio = () => {
        if (active) {
            // audio.src = "http/localhost:5000/" + active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }
    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [])
    return (
        <div className={styles.player}>
            <IconButton>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>

                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={0} right={100} onChange={changeVolume}/>
        </div>
    );
};

export default Player;