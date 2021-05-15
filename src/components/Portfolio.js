import React from 'react'
import ReactPlayer from 'react-player'


const Portfolio = () => {
    return (
        <div className="portfolio">

         
            <div className="portfolio-text">
            <h1>Game Room</h1>
            <p>Being a avid gamer, I would frequent alot of gaming review sites such as GameRanx.com or Ign.com. So for my capstone project at The Flatiron School, I thought it would be fun to try to build a gaming community website on my own and I ended up having a blast and learning a ton as well.  </p>
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=x1XqqEM3NuE&t=33s" controls />
            <br></br>

            <h1>Landmarkers</h1>
            <p>A webapp built during the pandemic for sharing our favorite locations/landmarks with friends and family </p>
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=81gCyDGc3vg&t=37s" controls />
            <br></br>
            
            <h1>JokesOnUs</h1>
            <p>A social forum for up and coming comedians to book gigs and build their network</p>
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=d-inxohHvKk&t=4s" controls />
            
            </div>   
        </div>
    )
}

export default Portfolio
