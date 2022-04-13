import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect'
}


export const Example1 = () => {
    console.log('render Example1')
    const [counter, setCounter] = useState(1)
    const [counter2, setCounter2] = useState(1)

    useEffect(() => {
        console.log('useEffect')
        document.title = JSON.stringify(counter)
    }, [counter])


    return <>
        <button onClick={() => setCounter(state => state + 1)}>+counter</button>
        {counter}
        <button onClick={() => setCounter2(state => state + 1)}>+counter2</button>
        {counter2}
    </>
}

export const SetTimeoutExample = () => {
    console.log('render Example')
    const [counter, setCounter] = useState<string>()

    const stopInterval = (id: any) => () => clearInterval(id);


    useEffect(() => {
        const intervalID = setInterval(() => {
            setCounter(new Date().toLocaleTimeString())
        }, 1000)

        return stopInterval(intervalID)
    }, [])


    return <>
        {/*<button onClick={() => setCounter(state => state + 1)}>counter</button>*/}
        {counter}
    </>
}