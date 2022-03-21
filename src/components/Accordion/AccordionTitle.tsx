import React from 'react';

type AccordionTitleType = {
    title: string
    click: () => void
}

export const AccordionTitle = React.memo<AccordionTitleType>((props) => {
    return (
        <h3 onClick={props.click}>
            {props.title}
        </h3>
    );
})