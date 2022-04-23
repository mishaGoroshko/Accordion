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

export const SetIntervalExample = () => {
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

export const ResetUseEffect = () => {
    console.log('render component')
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('useEffect ' + count)

        return () => {
            console.log('RESET ' + count)
        }
    }, [count])

    const onClickIncHandler = () => setCount(count + 1);

    return <>
        <div>{count}</div>
        <p/>
        <button onClick={onClickIncHandler}>count +1</button>
    </>
}


export const KeyTrackerEffect = () => {
    console.log('render component')
    const [text, setText] = useState('')
    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(state => state + e.key)
        }

        window.addEventListener('keypress', listener)

        return () => {
            window.removeEventListener('keypress', listener)
        }
    }, [])


    return <>
        <div>key tracker: {text}</div>
    </>
}


export const SetTimeoutExample = () => {
    // console.log('render Example')

    const [count, setCount] = useState(0)

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('Timeout')
            setCount(count + 1)
        }, 1000)

        return () => clearTimeout(timeoutID)
    }, [count])


    return <>
        {count}
    </>
}