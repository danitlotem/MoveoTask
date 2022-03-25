import './Style/BottomButtons.css'
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import LoopIcon from '@mui/icons-material/Loop';
import { useDispatch,useSelector } from 'react-redux';

const BottomButtons = () =>
{
    const playState = useSelector(state => { return state.play }) // get current play state from store
    const loopState = useSelector(state => { return state.loop }) // get current loop state from store
    const dispatch = useDispatch();

    const playHandler = () =>
    {
        dispatch({ type: 'PLAY', play: !playState }); // change play state
    }

    const loopHandler = () =>
    {
        dispatch({ type: 'LOOP', loop: !loopState });// change play state
    }

    return (
        <div className="BottomButtons-contianer">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                {/* 
                    if the button is pressed it will disabled 
                    if loop is pressed the color will be green
                */}
                <Button disabled={playState}  className="BottomButtons-Icon" onClick={ playHandler } ><PlayCircleIcon /></Button>
                <Button disabled={!playState} className="BottomButtons-Icon" onClick={ playHandler }><StopCircleIcon /></Button>
                <Button color={ (loopState === true) ? "success" : "info" }  className="BottomButtons-Icon" onClick={ loopHandler }><LoopIcon /></Button>
            </ButtonGroup >

        </div >
    );
}

export default BottomButtons