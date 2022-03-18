import React, {useState} from 'react';
import {ComponentMeta} from "@storybook/react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

export const SelectMode = () => {
    const [select, setSelect] = useState('moto')

    return <Select items={[{title: 'Gilera', value: 1}, {title: 'Honda', value: 2}, {title: 'Suzuki', value: 3}]}
                   select={select} setSelect={setSelect}/>
}