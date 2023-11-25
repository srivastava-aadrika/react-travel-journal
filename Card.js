import React from "react";
import trip from "/Users/aadrikasrivastava/Desktop/journal/journal/src/trip2.jpeg";
import './App.css';

const Card = (props) => {
    return ( 
        <div className="card">
            <img src = {props.item.coverImg} alt = "trp" className = "card-image" />
            <div className="card-content">
            
            <div >
                  <h3> {props.item.location} </h3> 
                </div>
            <div>
                {props.item.description}
            </div>
            <div >
                 <h3>{props.item.dates.start} - {props.item.dates.end}</h3>   
            </div>
                
                

            </div>

        </div>
     );
}
 
export default Card;