import React from "react";

function CardClick(props){
    return (
        <div
        style={{ backgroundImage: `url("${props.image}")` }}
        />

    )
}

export default CardClick;