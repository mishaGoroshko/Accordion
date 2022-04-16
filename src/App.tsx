import React, {useState} from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {ItemType} from "./components/Accordion/AccordionBody";
import {Select} from "./components/Select/Select";
import {Clock} from './components/Clock/Clock';

function App() {

    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)
    let [starValue, setStarValue] = useState<number>(0)
    let items: ItemType[] = [{title: 'auto', value: 1}, {title: 'moto', value: 2}, {title: 'coding', value: 3}]
    const onClick = () => {
    }

    const [select, setSelect] = useState('moto')

    return (
        <div>
            <PageTitle title={'React kabzda kak prosto'}/>
            <OnOff on={on} setOn={setOn}/>
            <Accordion onClick={onClick} title={'Hobbies'} collapsed={collapsed} setCollapsed={setCollapsed}
                       items={items}/>
            <Rating starValue={starValue} setStarValue={setStarValue}/>
            <Select
                items={[{title: 'Gilera', value: 1}, {title: 'Honda', value: 2}, {title: 'Suzuki', value: 3}]}
                select={select}
                setSelect={setSelect}
            />
            <Clock/>


            {/*<Accordion title={'Tasks for training'}/>*/}
            {/*<Rating/>*/}

        </div>
    );
}

export default App;
