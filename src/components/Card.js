import React from "react";
import card from "../images/katie-zaferes.png"
import star from "../images/star.png"

function Card() {
    return(
        <div className="card">
            <img src={card} alt="" className="card-image"/>
            <div className="card-stats">
                <img src={star} alt="" className="card-star"/>
                <span>5.0</span>
                <span className="grey">(6) -</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}

export default Card