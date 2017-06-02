'use strict';

let Link = require("react-router/lib/Link");
let React = require('react');

let Navigation = React.createClass({
    render() {
        return <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Jartronik</a>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="nav navbar-nav">
                        <li className="center">
                            <Link to="/offers" activeClassName="active" onlyActiveOnIndex>Oferta</Link>
                        </li>
                        <li className="center">
                            <Link to="/companies" activeClassName="active" onlyActiveOnIndex>Limit remontowy</Link>
                        </li>
                        <li className="center">
                            <Link to="/companies" activeClassName="active" onlyActiveOnIndex>Galeria</Link>
                        </li>
                        <li className="center">
                            <Link to="/contact" activeClassName="active" onlyActiveOnIndex>Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
});

module.exports = Navigation;
