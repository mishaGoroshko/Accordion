import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const Accordion: React.FC<AccordionType> = ({setCollapsed, collapsed,...props}) => {


    const click = () => setCollapsed(!collapsed)

    return (
        <>
            <AccordionTitle title={props.title} click={click}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
    // if (props.collapsed) {
    //     return <>
    //         <AccordionTitle title={props.title}/>
    //     </>
    //
    // } else {
    //     return <>
    //         <AccordionTitle title={props.title}/>
    //         <AccordionBody/>
    //     </>
    // }
}

