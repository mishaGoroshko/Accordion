import React, {useState} from "react";
import {Star} from "./Star";

type RatingType = {
    setStarValue: (starValue: number) => void
    starValue: number
}

export const Rating: React.FC<RatingType> = ({setStarValue, starValue, ...props}) => {


    const clickStar1 = () => setStarValue(1)
    const clickStar2 = () => setStarValue(2)
    const clickStar3 = () => setStarValue(3)
    const clickStar4 = () => setStarValue(4)
    const clickStar5 = () => setStarValue(5)

    return (
        <div>
            <Star select={starValue > 0} clickStar={clickStar1}/>
            <Star select={starValue > 1} clickStar={clickStar2}/>
            <Star select={starValue > 2} clickStar={clickStar3}/>
            <Star select={starValue > 3} clickStar={clickStar4}/>
            <Star select={starValue > 4} clickStar={clickStar5}/>
        </div>
    )
}


