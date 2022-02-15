import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
    title: string
    // collapsed: boolean
}

export const Accordion: React.FC<AccordionType> = (props) => {
    let [collapsed, setCollapsed] = useState(false)

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

