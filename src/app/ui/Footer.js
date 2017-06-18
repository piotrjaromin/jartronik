'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;

class Footer extends React.Component {
    render() {
        return <footer className="footer text-center maring-up-1em">
                    <div className="footer-below">
                            <p className="">Copyright © Jartronik 2017. All Rights Reserved</p>
                    </div>
                </footer>
    }
};


module.exports = Footer;
