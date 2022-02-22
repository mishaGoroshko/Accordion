import React from "react";

type StarType = {
    select: boolean
    clickStar: () => void
}

export const Star: React.FC<StarType> = (props) => {
    return (
        <span onClick={props.clickStar}>
                {props.select ? <b>star </b> : 'star '}
        </span>
    )
    // if (props.select) {
    //     return <span><b>star </b></span>
    // }else {
    //     return <span>star </span>
    // }
}