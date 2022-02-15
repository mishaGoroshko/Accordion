import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {PageTitle} from "./components/PageTitle";

function App() {
    return (
        <div>
            <PageTitle title={'React kabzda kak prosto'}/>
            <Accordion title={'Hobbies'} collapsed={false}/>
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={2}/>
            <Rating value={5}/>
            <Accordion title={'Tasks for training'} collapsed={true}/>

        </div>
    );
}

export default App;
