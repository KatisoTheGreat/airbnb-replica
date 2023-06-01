import React from "react";
import collage from "../images/photo-grid.png"

function Hero() {
    return(
        <section className="hero">
            <img src={collage} alt="" className="collage"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero