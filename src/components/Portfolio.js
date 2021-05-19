import React from 'react'
import ReactPlayer from 'react-player'


const Portfolio = () => {
    return (
        <div className="portfolio">

         
            <div className="portfolio-text">
            <h1>Game Room</h1>
            <p>Being a avid gamer, I would frequent alot of gaming review sites such as GameRanx.com or Ign.com. So for my capstone project at The Flatiron School, I thought it would be fun to try to build a gaming community website on my own and I ended up having a blast and learning a ton as well. I used React with Redux for the frontend and I created a custom backend API server using Ruby on Rails  </p>
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=x1XqqEM3NuE&t=33s" controls />
            <br></br>

            <h1>Landmarkers</h1>
            <p>During the pandemic my friends and I would constantly reminisce about our favorite local establishments or hangout spots, so I built this webapp for sharing our favorite locations/landmarks with friends and family. I built this with my friend Karina who handled most of the styling while I worked on implementing the google maps and geocode API functions.</p>
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=81gCyDGc3vg&t=37s" controls />
            <br></br>
            
            <h1>JokesOnUs</h1>
            <p>This my first webapp built using only Ruby on Rails. I had a friend who was a standup comedian and I thought it would be funny to build a crappy 90s style social media website but for his fellow comedians to share jokes and review comedy gigs. </p>
            <ReactPlayer className="portfolio-player" url="https://www.youtube.com/watch?v=d-inxohHvKk&t=4s" controls />
            
            </div>   
        </div>
    )
}

export default Portfolio
