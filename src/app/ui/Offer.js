'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;

class Offer extends React.Component {

    constructor(params) {
        super(params);
    }

    render() {
        return <div className="container">

                <Row>
                    <Col lg={3} md={3} sm={4}>
                        <div className="list-group table-of-contents">
                        <a className="list-group-item" href="#navbar">Ktoły</a>
                        <a className="list-group-item" href="#buttons">Kotły gazowe</a>
                        <a className="list-group-item" href="#typography">Grzejniki i bojlery</a>
                        <a className="list-group-item" href="#tables">Kolektory słoneczne</a>
                        <a className="list-group-item" href="#forms">Kominki</a>
                        <a className="list-group-item" href="#navs">Aparty grzewczo-wentylacyjne</a>
                        </div>
                    </Col>
                    <Col log={9} md={9} sm={8}>
                        <Row>
                            <Col sm={12} md={3} log={3}></Col>
                        </Row>    
                    </Col>
                </Row>
            </div>
    }
}


module.exports = Offer;