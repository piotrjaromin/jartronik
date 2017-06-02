'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const OferTile = require('./OfferTile');

class Offer extends React.Component {

    constructor(params) {
        super(params);
    }

    render() {
        return <Row>
                    <Col lg={3} md={3} sm={3} xs={12}>
                        <div className="list-group table-of-contents">
                        <a className="list-group-item" href="#navbar">Ktoły</a>
                        <a className="list-group-item" href="#buttons">Kotły gazowe</a>
                        <a className="list-group-item" href="#typography">Grzejniki i bojlery</a>
                        <a className="list-group-item" href="#tables">Kolektory słoneczne</a>
                        <a className="list-group-item" href="#forms">Kominki</a>
                        <a className="list-group-item" href="#navs">Aparty grzewczo-wentylacyjne</a>
                        </div>
                    </Col>
                    <Col log={9} md={9} sm={9} xs={12}>
                        <Row>
                            <OferTile></OferTile>
                            <OferTile></OferTile>
                            <OferTile></OferTile>
                            <OferTile></OferTile>
                            <OferTile></OferTile>
                            <OferTile></OferTile>
                        </Row>
                    </Col>
                </Row>
    }
}


module.exports = Offer;