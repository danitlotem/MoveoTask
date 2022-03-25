import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import './Style/AudioPlayer.css'

export default function AudioPlayer(props)
{
    const duration = 17; // the numbers of seconds in all sound tracks 
    const [seconds, setSeconds] = useState(0);

    const playState = useSelector(state => { return state.play })
    const loopState = useSelector(state => { return state.loop })

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setSeconds(seconds => seconds + 1); // increase seconds by one

        }, 1000); // each iteration is 1 second
        return () => clearInterval(interval);
    }, [playState]);

    useEffect(() =>
    {
        let interval = null;
        if (loopState && seconds >= duration)
        {
            setSeconds(0);// reset seconds
            clearInterval(interval);
        }

        if (!playState)
        {
            setSeconds(0); // reset seconds
            clearInterval(interval);
        }

        return (() =>
        {
            clearInterval(interval);
        })
    }, [loopState, playState, seconds]);

    return (
        <div className="cursor">
            < Slider sx={ { color: "white" } } className="slider" aria-label="time-indicator" size="small" value={ seconds } min={ 0 } step={ 1 } max={ duration } />
        </div>
    );
}
