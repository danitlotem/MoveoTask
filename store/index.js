import { createStore } from 'redux';


const Reducer = (state = {
    play: false,
    loop: false,
    ended: 1,
    mute: { val: false, index: -1 }
}, action) =>
{

    if (action.type === 'PLAY') // play button state
    {
        return { ...state, play: action.play };
    }

    if (action.type === 'LOOP')// loop button state
    {
        return { ...state, loop: action.loop };
    }
    if (action.type === 'PLAYLOOP_ENDED')// sound ended state
    {
        return { ...state, ended: state.ended + 1 };
    }
    if (action.type === 'MUTE')// mute button state
    {
        return { ...state, mute: { val: action.value, index: action.index } };
    }

    return state;
};

const store = createStore(Reducer, { play: false, loop: false,ended:1, mute: { val: false, index: -1 }, });

export default store;