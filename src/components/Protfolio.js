import React from 'react'
import "../Homes.css"

const Protfolio = () => {
    return (
    <>
    <div className="Portfolio" id="Portfolio">
        <div className="container">
            <h2 className="special-heading">Portfolio</h2>
            <p>if you do it right, it will last forever</p>
            <div className="portfolio-content">
                <div className="card">
                    <img src={require('../imgs/Rectangle1.png')} alt="this is image"/>
                    <div className="info">
                        <h3>Project Here</h3>
                        <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../imgs/Rectangle2.png')} alt="this is image"/>
                    <div className="info">
                        <h3>Project Here</h3>
                        <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={require('../imgs/Rectangle3.png')} alt="this is image"/>
                    <div className="info">
                        <h3>Project Here</h3>
                        <p>My creative ability is very difficult to measure because it can manifest in so many surprising and.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Protfolio