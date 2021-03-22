import React from 'react'
import Typed from 'react-typed'

const Home = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>full stack developer with knowledge in JS and Rails</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "React UI", "RESTful Apis"]}
                    typeSpeed={80}
                    backSpeed={40}
                    loop={true}
                />

                <a href="#" />
            </div>
            
        </div>
    )
}

export default Home
