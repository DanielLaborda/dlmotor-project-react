import React, { Component } from "react";

class Home extends Component {
    
    render() {
        return (
            <div className='home'>
                <div className='home__video'>
                 <iframe
                    src={`https://youtube.com/embed/JGKdZ-QhHAU`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        );
    }

}

export default Home;