import React from 'react';

export const Clock = () => {

    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        // hr && hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        // mn && mn.style.transform = `rotateZ(${mm}deg)`;
        // sc && sc.style.transform = `rotateZ(${ss}deg)`;
    })

    return (
        <div className="clock">
            <div className="hour">
                <div className="hr" id="hr"/>
            </div>
            <div className="min">
                <div className="mn" id="mn"/>
            </div>
            <div className="sec">
                <div className="sc" id="sc"/>
            </div>
        </div>
    );
}