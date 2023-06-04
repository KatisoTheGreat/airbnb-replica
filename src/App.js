import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";
import data from "../src/data"

function App() {

    const cards = data.map(item => {
        return(
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })

    return(
        <div>
        <Navbar />
        {/* <Hero /> */}
        {cards}
    </div>
    )
}

export default App