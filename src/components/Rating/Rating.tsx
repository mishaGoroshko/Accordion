import React, {useState} from "react";
import {Star} from "./Star";

type RatingType = {
    // value: number
}

export const Rating: React.FC<RatingType> = (props) => {
    let [value, setValue] = useState(0)

    const clickStar1 = () => setValue(1)
    const clickStar2 = () => setValue(2)
    const clickStar3 = () => setValue(3)
    const clickStar4 = () => setValue(4)
    const clickStar5 = () => setValue(5)

    return (
        <div>
            <Star select={value > 0} clickStar={clickStar1}/>
            <Star select={value > 1} clickStar={clickStar2}/>
            <Star select={value > 2} clickStar={clickStar3}/>
            <Star select={value > 3} clickStar={clickStar4}/>
            <Star select={value > 4} clickStar={clickStar5}/>
        </div>
    )
}


