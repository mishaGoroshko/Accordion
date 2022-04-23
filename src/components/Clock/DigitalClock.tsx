import React, {useEffect, useState} from 'react';

export const DigitalClock = () => {
    const [date, setDate] = useState<string>()

    const stopInterval = (id: any) => () => clearInterval(id);

    useEffect(() => {
        let intervalID = setInterval(() => {
            setDate(new Date().toLocaleTimeString())
        }, 1000)
        return stopInterval(intervalID)
    }, [])

    return (
        <div>
            {date}
        </div>
    );
}