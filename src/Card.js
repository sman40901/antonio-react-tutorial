import React from "react"
import './Card.scss';


function Card(props){
    return (
        <tr>
            <td>{props.header}</td>
            <td>{props.suite}</td>
            <td><img className= "imageCard" src={props.img} alt={props.header}/></td>
        </tr>
    )
}

export default Card