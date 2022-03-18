import React, {useState} from 'react';
import {ComponentMeta, ComponentStory, Story} from "@storybook/react";
import {Accordion, AccordionType} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;


const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const AccordionCollapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccordionCollapsed.args = {
    title: 'new collapsed',
    collapsed: false,
    setCollapsed: (collapsed: boolean) => true,
    items: [{title: 'Gilera', value: 1}, {title: 'Honda', value: 2}, {title: 'Suzuki', value: 3}],
    onClick: action('AccordionCollapsed')
};

export const AccordionUncollapsed = Template.bind({});

AccordionUncollapsed.args = {
    title: 'new collapsed',
    collapsed: true,
    setCollapsed: (collapsed: boolean) => true,
    items: [{title: 'Gilera', value: 1}, {title: 'Honda', value: 2}, {title: 'Suzuki', value: 3}],
    onClick: action('AccordionUncollapsed')
};

export const AccordionMode: Story<AccordionType> = (args) => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion title={'WWW'} setCollapsed={setCollapsed} collapsed={collapsed}
                      items={[{title: 'Gilera', value: 1}, {title: 'Honda', value: 2}, {title: 'Suzuki', value: 3}]}
                      onClick={(id) => alert(`title have ID:${id}`)}/>
}