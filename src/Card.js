import React from "react"
import './Card.scss';


function Card(props){
    return (
        <div>
            <h2>{props.header}</h2>
            <p>{props.suite}</p>
            <img className= "imageCard" src={props.img} alt={props.header}/>
        </div>
    )
}

export default Card