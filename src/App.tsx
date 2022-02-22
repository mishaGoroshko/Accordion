import React, {useState} from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on,setOn] = useState<boolean>(false)
    let [starValue, setStarValue] = useState<number>(0)

    return (
        <div>
            <PageTitle title={'React kabzda kak prosto'}/>
            <OnOff on={on} setOn={setOn}/>
            <Accordion title={'Hobbies'} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Rating starValue={starValue} setStarValue={setStarValue}/>


            {/*<Accordion title={'Tasks for training'}/>*/}
            {/*<Rating/>*/}

        </div>
    );
}

export default App;
