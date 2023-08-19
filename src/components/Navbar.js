import React from "react";
import {Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Homes.css"





const Navbar = () => {

  return (
    <NavbarBs sticky="top" className="header">
      <Container >
      <Nav.Link >
        <img src={require('../imgs/vimeo.png')} className="logo" />
      </Nav.Link>

    <Nav className=""> 
    
      
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Service" as={NavLink}>
            services
          </Nav.Link>
          <Nav.Link to="/Protfolio" as={NavLink}>
            Portfolio
          </Nav.Link>
        
        
          <Nav.Link to="/About" as={NavLink}>
          about
          </Nav.Link>

          <Nav.Link to="/Contact" as={NavLink}>
          contact
          </Nav.Link>
          
    <NavLink to="/login">  
                    <div className="button">
                      <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                      </div>
                      </div>
                        <span>Login</span>
                    </div>
</NavLink>

</Nav>
          
        
        
          

      
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
