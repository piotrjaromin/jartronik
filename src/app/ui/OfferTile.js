'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const Link = require("react-router/lib/Link");

class OfferTile extends React.Component {

    constructor(params) {
        super(params);
    }

    render() {

        const imgUrl = this.props.imgUrl || "http://placehold.it/350x260";

        return <Col md={3} sm={4} xs={6} className="maring-up-1em">
                    <div className="col-item">
                        <div className="photo">
                            <img src={imgUrl} height="187" wid alt="a" />
                        </div>
                        <div className="info">
                            <Row>
                                <Col lg={12}>
                                    <Link to={this.props.path}>
                                    <h5>{this.props.name}</h5>
                                    </Link>
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