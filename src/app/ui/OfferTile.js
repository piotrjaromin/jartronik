'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;

class OfferTile extends React.Component {

    constructor(params) {
        super(params);
    }

    render() {
        return <Col md={3} sm={4} xs={6} className="maring-up-1em">
                    <div className="col-item">
                        <div className="photo">
                            <img src="http://placehold.it/350x260" className="img-responsive" alt="a" />
                        </div>
                        <div className="info">
                            <Row>
                                <Col lg={12}>
                                    <h5>Sample Product</h5>
                                </Col>
                            </Row>
                            <div className="clearfix">
                            </div>
                        </div>
                    </div>
                </Col>
    }
}


module.exports = OfferTile;