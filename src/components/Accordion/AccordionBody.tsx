import React from 'react';

export type ItemType = {
    title: string
    value: any
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export const AccordionBody: React.FC<AccordionBodyType> = ({items, onClick, ...props}) => {
    return (
        <ul>
            {items.map((el, index) => <li
                key={index}
                onClick={() => onClick(el.value)}
            >{el.title}</li>)}
        </ul>
    );
}