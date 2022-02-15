import React from "react";

type StarType = {
    select: boolean
    clickStar: () => void
}

export const Star: React.FC<StarType> = (props) => {
    return (
        <>
            {props.select ? <span onClick={props.clickStar}><b>star </b></span> :
                <span onClick={props.clickStar}>star </span>}
        </>
    )
    // if (props.select) {
    //     return <span><b>star </b></span>
    // }else {
    //     return <span>star </span>
    // }
}