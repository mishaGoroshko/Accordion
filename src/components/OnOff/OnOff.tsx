import React, {useState} from 'react';

export type OnOffType = {
    setOn: (on: boolean) => void
    on: boolean
    backgroundColorON?: string
    backgroundColorOFF?: string
}
export const OnOff: React.FC<OnOffType> = ({setOn, on,backgroundColorON,backgroundColorOFF, ...props}) => {

    const onStyle = {
        width: '30px',
        height: '30px',
        fontSize: '25px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        background: on ? backgroundColorON || 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        fontSize: '25px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        background: on ? 'white' : backgroundColorOFF || 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        borderRadius: '5px',
        background: on ? backgroundColorON || 'green' : backgroundColorOFF || 'red'
    }

    const onClick = () => setOn(true);
    const offClick = () => setOn(false);
    return (
        <div>
            <div style={onStyle} onClick={onClick}>on</div>
            <div style={offStyle} onClick={offClick}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}