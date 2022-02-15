import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
    title: string
    collapsed: boolean
}

export const Accordion: React.FC<AccordionType> = (props) => {

    return (
        <>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
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

