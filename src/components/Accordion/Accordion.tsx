import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody, ItemType} from "./AccordionBody";

export type AccordionType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}


export const Accordion = React.memo<AccordionType>(({setCollapsed, collapsed, items, onClick, ...props}) => {
    const click = () => setCollapsed(!collapsed)

    return (
        <>
            <AccordionTitle title={props.title} click={click}/>
            {!collapsed && <AccordionBody onClick={onClick} items={items}/>}
        </>
    )
})

