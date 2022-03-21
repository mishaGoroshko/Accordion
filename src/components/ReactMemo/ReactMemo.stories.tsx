import React, {useState} from "react";

export default {
    title: 'React.memo'
}

const Counter = React.memo((props: { count: number }) => {
    console.log('SecretCounter')
    return <div>{props.count}</div>
})

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('SecretUsers')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(SecretUsers)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Miha', 'Alina', 'Polina', 'Sasha'])

    const addUser = () => setUsers([...users, 'Ivanich' + ' ' + new Date().getTime()]);
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}