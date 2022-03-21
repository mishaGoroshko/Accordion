import React from "react";

type StarType = {
    select: boolean
    clickStar: () => void
}

export const Star = React.memo<StarType>((props) => {
    return (
        <span onClick={props.clickStar}>
                {props.select ? <b>star </b> : 'star '}
        </span>
    )
})