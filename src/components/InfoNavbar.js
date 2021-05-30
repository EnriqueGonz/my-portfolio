import React, {Component} from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import logo from '../assets/image/logoje.png';

class InfoNavbar extends Component{
    render(){
        return(
            <div>
                <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="JE Logo"
                />
                </ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#portfolio">Portfolio</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#skillset">Skill set</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                        <span className="navbar-text">
                            Jose Enrique Gonzalez Espinosa / Developer Junior
                        </span>
                        </ReactBootStrap.Nav>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        )
    }

}

export default InfoNavbar;