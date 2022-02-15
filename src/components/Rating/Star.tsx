import React from "react";

type StarType = {
    select: boolean
    clickStar: () => void
}

export const Star: React.FC<StarType> = (props) => {
    return (
        <div>
            {props.select ? <span onClick={props.clickStar}><b>star </b></span> :
                <span onClick={props.clickStar}>star </span>}
        </div>
    )
    // if (props.select) {
    //     return <span><b>star </b></span>
    // }else {
    //     return <span>star </span>
    // }
}