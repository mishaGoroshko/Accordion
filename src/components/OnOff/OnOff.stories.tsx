import React, {useState} from 'react';
import {ComponentMeta, ComponentStory, Story} from "@storybook/react";
import {OnOff, OnOffType} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColorON: {control: 'color'},
        backgroundColorOFF: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args}/>

export const OnnOffTest1 = Template.bind({})

OnnOffTest1.args = {
    on: true,
    setOn:on => true
}

export const OnOffTest2: Story<OnOffType> = (args) => {
    let [on,setOn] = useState<boolean>(true)
    return <OnOff on={on} setOn={setOn} backgroundColorON={args.backgroundColorON} backgroundColorOFF={args.backgroundColorOFF}/>
}
