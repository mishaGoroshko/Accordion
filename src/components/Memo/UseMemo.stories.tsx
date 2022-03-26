import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let res = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            res *= i
        }
        return res
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>

        </>
    );
}

const Counter1 = React.memo((props: { count: number }) => {
    console.log('SecretCounter')
    return <div>{props.count}</div>
})

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('SecretUsers')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)


export const useMemoHelpToReactMemo = () => {
    console.log('useMemoHelpToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Miha', 'Alina', 'Polina', 'Sasha'])


    const addUser = () => setUsers([...users, 'Ivanich' + ' ' + new Date().getTime()]);
    const newUsersArr = useMemo(()=>users.filter(el => el.indexOf('i') > -1),[users]) ;
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter1 count={counter}/>
        <Users users={newUsersArr}/>
    </>
}