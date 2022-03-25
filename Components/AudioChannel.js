import './Style/AudioChannel.css'
import * as React from 'react';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import tracks from '../Tracks'
import useSound from 'use-sound'
import { useSelector } from 'react-redux';

const AudioChannels = (props) =>
{
    const [pressed, setPressed] = useState(false) 
    const [volume, setVolume] = useState(true)
    const playState = useSelector(state => { return state.play })// get current play state from store
    const loopState = useSelector(state => { return state.loop }) // get current loop state from store
    const ended = useSelector(state => { return state.ended })
    const dispatch = useDispatch();
    
    const [play, { stop }] = useSound(tracks[props.id].audioSrc, {
        volume: volume ? 1 : 0,
        onend: () =>
        {
            dispatch({ type: 'PLAYLOOP_ENDED' });
        }
    });

    const HandleVolume = (id) =>
    {
        //if mute button is press change volume to 0 
        setVolume(!volume);
        setPressed(!pressed)
        dispatch({ type: 'MUTE', val: pressed, index: id }); //change button state
    }
    
    useEffect(() =>
    {
        if (playState)
        {
            play(); // if play in on - play music
        }
        else
        {
            stop();// if play in off (stop is on) - stop music
        }
    }, [playState, dispatch, play, stop]);

    useEffect(() =>
    {
        if (loopState)
        {
            dispatch({ type: 'LOOP', loop: true }); // change loop state in store
        }
    }, [loopState, dispatch])

    useEffect(() =>
    {
        if (loopState) // if sound ended and loopstate is true - play another round
        {
            play();
        }
    }, [ended])

    return (

        < div className="AudioChannel-contianer" style={ { backgroundColor: props.color } }>
            <div>{ `${ props.id + 1 }) ${ props.name }` }</div> 
            < Button color={ (pressed === true) ? "error" : "success" } variant="contained" className="AudioChannel-muteButton" onClick={ () => HandleVolume(props.id) }>
                {
                    pressed && <VolumeOffIcon /> // if button is pressed - VolumeOff icon
                }
                {
                    !pressed && <VolumeUpIcon />// if button is pressed - VolumeOn icon

                }
            </Button >
        </div >)

}

export default AudioChannels