import React, {useMemo, useState} from 'react';

export default {
    title: 'useState'
}

function generateData() {
    console.log('generate NUMBER')
    return 1
}

export const Example1 = () => {
    console.log('render Example1')
    // const initValue =useMemo(generateData,[])
    const [counter, setCounter] = useState(generateData)

    const changeValue = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}