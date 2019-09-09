import React from "react";
import "./style.css";

function CardItem(props){
    return (
        <div>
            {/* <div className="img-container"> */}
            <img 
            src={props.src}
            alt={props.name}
            
            clicked={props.clicked} />
            {/* </div> */}
            {/* onClick={ () => props.handleClick(props.id)} /> */}
        
        </div>

    )
}

export default CardItem;