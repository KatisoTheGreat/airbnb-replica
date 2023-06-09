import React from "react";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";
import data from "../src/data"

function App() {

    const cards = data.map(item => {
        return(
            <Card
                key={item.id} 
                item={item}
            />
        )
    })

    return(
        <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
                {cards}
        </section>
    </div>
    )
}

export default App