import React from "react";

type StarType = {
    select: boolean
}

export const Star: React.FC<StarType> = (props) => {
    if (props.select) {
        return <span><b>star </b></span>
    }else {
        return <span>star </span>
    }

}