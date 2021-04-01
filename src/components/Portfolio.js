import React from 'react'
import ReactPlayer from 'react-player'

const Portfolio = () => {
    return (
        <div className="portfolio">
            
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=x1XqqEM3NuE&t=33s" controls />
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=81gCyDGc3vg&t=37s" controls />
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=d-inxohHvKk&t=4s" controls />
            
        </div>
    )
}

export default Portfolio
