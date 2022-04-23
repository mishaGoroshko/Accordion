import React from "react";

import AnalogueClock from 'react-analogue-clock';
import s from './AnalogClock.module.css';

export const AnalogClock = () => {
    const clockOptions = {
        baseColor: '#000000',
        borderColor: '#000000',
        borderWidth: 0,
        centerColor: '#000000',
        handColors: {
            hour: '#ffffff',
            minute: '#ffffff',
            second: 'red',
        },
        notchColor: '#ffffff',
        numbersColor: '#ffffff',
        showNumbers: true,
        size: 300
    }
    return (
        <div className={s.AnalogClockBlock}>
            <AnalogueClock {...clockOptions} />
        </div>
    );
}