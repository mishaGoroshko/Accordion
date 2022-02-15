import React, {useState} from 'react';

export const OnOff:React.FC = (props) => {
    let [on,setOn] = useState(true)

    const onStyle = {
        width: '30px',
        height: '30px',
        fontSize: '25px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        background: on ?'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        fontSize: '25px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        background: on ?'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        marginLeft: '2px',
        display: 'inline-block',
        borderRadius: '5px',
        background: on ?'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(true)}>on</div>
            <div style={offStyle} onClick={()=>setOn(false)}>off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
}