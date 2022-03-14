import react, {ChangeEvent, useRef, useState} from 'react'

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={'qwerty'}/>
export const TrackedValueUncontrolledInput = () => {
    const [text, setText] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value);
    return <><input value={text} onChange={onChange}/> - {text}</>
}

export const GetValueUncontrolledInputByButton = () => {
    const [text, setText] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = () => {
        const el = inputRef.current as HTMLInputElement
        setText(el.value)
    };
    return <><input ref={inputRef}/>
        <button onClick={onClick}>press
        </button>
        - full value: {text}</>
}