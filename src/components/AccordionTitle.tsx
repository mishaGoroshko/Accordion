import React from 'react';

type AccordionTitleType = {
    title: string
}

export const AccordionTitle: React.FC<AccordionTitleType> = (props) => {
    return (
        <h3>
            {props.title}
        </h3>
    );
}