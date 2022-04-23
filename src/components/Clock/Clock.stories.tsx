import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Clock} from './Clock';
import {Button} from '../../stories/Button';
import React from 'react';

export default {
    title: 'Clock',
    component: Clock,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const DigitalClock = Template.bind({});

DigitalClock.args = {
    mode: true
};

export const AnalogClock = () => {
    return <Clock mode={false}/>
}