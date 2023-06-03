import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";
import card from "../src/images/katie-zaferes.png"

function App() {
    return(
        <div>
        <Navbar />
        {/* <Hero /> */}
        <Card 
            img={card}
            rating="5.0"
            reviewCount={(6)}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
        />
    </div>
    )
}

export default App