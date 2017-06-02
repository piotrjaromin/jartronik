'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;

const Footer = React.createClass({
    render() {
        return <footer className="footer text-center">
                    <div className="footer-below">
                            <p class="">Copyright © Jartronik 2017. All Rights Reserved</p>
                    </div>
                </footer>
    }
});


module.exports = Footer;
