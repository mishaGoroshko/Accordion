import React from 'react';

type PageTitleType  = {
    title: string
}

export const PageTitle:React.FC<PageTitleType> = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}