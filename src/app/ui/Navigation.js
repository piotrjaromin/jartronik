'use strict';

const Link = require("react-router/lib/Link");
const React = require('react');
const Navbar = require('react-bootstrap').Navbar;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;

class Navigation extends React.Component {

    constructor(params) {
        super(params);
    }

    render() {

        return <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Jartronik</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#/offers">Oferta</NavItem>
                <NavItem eventKey={1} href="#/gallery">Galeria</NavItem>
                <NavItem eventKey={2} href="#/contact">Kontakt</NavItem>
            </Nav>
        </Navbar>
    }
}

module.exports = Navigation;
