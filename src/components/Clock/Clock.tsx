import React from 'react';
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from './AnalogClock';

type ClockType = {
    mode: boolean
}

export const Clock: React.FC<ClockType> = ({mode}) => {
    return (
        <>
            <p/>
            {mode ? <DigitalClock/> : <AnalogClock/>}
        </>
    );
}