import React from "react";
import {Star} from "./Star";

type RatingType = {
    value: number
}

export const Rating: React.FC<RatingType> = (props) => {
    return (
        <div>
            <Star select={props.value > 0}/>
            <Star select={props.value > 1}/>
            <Star select={props.value > 2}/>
            <Star select={props.value > 3}/>
            <Star select={props.value > 4}/>
        </div>
    )
}


