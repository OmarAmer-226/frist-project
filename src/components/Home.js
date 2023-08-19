import React from "react";
import "../Homes.css"


const Home = () => {
  return (
  <>
    <div className="landing">
        <div className="intro-text">
            <h1>welcome</h1>
            <p>we are vimeo - super creative and minimal agency courses</p>
        </div>
    </div>
    <div className="features">
        <div className="container">
            <div className="feat">
                
                <img src={require('../imgs/magic stick.png')} alt="this is image"/>
                <h3> your idea</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
            </div>
            <div className="feat">
                
                <img src={require('../imgs/diamond2.png')} alt="this is image"/>
                <h3>we will do all the work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
            </div>
            <div className="feat">
                
                <img src={require('../imgs/earth.png')} alt="this is image"/>
                <h3>your project is worldwide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab</p>
            </div>
        </div>
    </div>
    
  
  </>
)};

export default Home;
