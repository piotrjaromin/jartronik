'use strict';

const React = require('react');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const OferTile = require('./OfferTile');
const Link = require("react-router/lib/Link");
const offers = require('../offers-list');

class OffersMenu extends React.Component {

    render() {
        return <div className="list-group table-of-contents">
            <a className="list-group-item" href="#offers" onClick={this.props.handleClick("")}>Wszystkie</a>
            <a className="list-group-item" href="#offers?filter=kotly" onClick={this.props.handleClick("kotly")}>Kotły</a>
            <a className="list-group-item" href="#offers?filter=kotly" onClick={this.props.handleClick("kotly-gazowe")}>Kotły gazowe</a>
            <a className="list-group-item" href="#offers?filter=bojlery" onClick={this.props.handleClick("bojlery")}>Grzejniki i bojlery</a>
            <a className="list-group-item" href="#offers?filter=other" onClick={this.props.handleClick("other")}>Kolektory słoneczne</a>
            <a className="list-group-item" href="#offers?filter=kominki" onClick={this.props.handleClick("kominki")}>Kominki</a>
            <a className="list-group-item" href="#offers?filter=akcesoria" onClick={this.props.handleClick("akcesoria")}>Akcesoria kominkowe</a>
        </div>
    }
}


module.exports = OffersMenu;