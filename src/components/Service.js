import React from 'react'
import "../Homes.css"

const Service = () => {
    return (
    <>
    <div className="services" id="services">
        <div className="container">
            <h2 className="special-heading">services</h2>
            <p>don't be busy, be productive</p>
            <div className="services-content">
                <div className="col">
                    <div className="srv">
                        
                        <img src={require('../imgs/color.png')} alt="this is image"/>
                        <div className="text">
                            <h3>Graphic Design</h3>
                            <p>Graphic design is the process of visual communication and problem-solving using one or more of
                            typography, photography and illustration.</p>
                        </div>
                    </div>
                    <div className="srv">
                        
                        <img src={require('../imgs/diamond2.png')} alt="this is image"/>
                        <div className="text">
                            <h3>UI & UX</h3>
                            <p>
                                Process of enhancing user satisfaction with a product by improving the usability, accessibility, and
                                pleasure provided in the interaction.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="srv">
                        
                        <img src={require('../imgs/design.png')} alt="this is image"/>
                        <div className="text">
                            <h3>Web Design</h3>
                            <p>
                                Web design encompasses many different skills and disciplines in the production and maintenance of
                                websites.
                            </p>
                        </div>
                    </div>
                    <div className="srv">
                        
                        <img src={require('../imgs/web.png')} alt="this is image"/>
                        <div className="text">
                            <h3>Web Development</h3>
                            <p>
                            Web development is a broad term for the work involved in developing a web site for the Internet or an
                            intranet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="image image-column">
                        <img src={require('../imgs/img2.png')} alt="this is image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Service