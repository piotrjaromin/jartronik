'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const OferTile = require('./OfferTile');
const Link = require("react-router/lib/Link");
const offers = require('../offers-list');
const OffersMenu = require('./OffersMenu');

class Offer extends React.Component {

    constructor(params) {
        super(params);
        this.state = { filter: this.props.location.query.filter || ".*"}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(filterValue) {
        const self = this;
        return () => {
            self.setState({filter: filterValue});
        }
    }

    render() {
        const tiles = [];
        const filter = this.state.filter;

        offers
            .filter( o => new RegExp(filter).test(o.category))
            .forEach( o => tiles.push(<OferTile name={o.name} imgUrl={o.image} path={o.path}></OferTile>));

        return <Row>
                    <Col lg={3} md={3} sm={3} xs={12}>
                        <OffersMenu handleClick={this.handleClick}/>
                    </Col>
                    <Col lg={9} md={9} sm={9} xs={12}>
                        <Row>
                            {tiles}
                        </Row>
                    </Col>
                </Row>
    }
}


module.exports = Offer;