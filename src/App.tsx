import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <PageTitle title={'React kabzda kak prosto'}/>
            <OnOff/>
            <Accordion title={'Hobbies'}/>
            <Accordion title={'Tasks for training'}/>

            <Rating/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={5}/>*/}


        </div>
    );
}

export default App;
