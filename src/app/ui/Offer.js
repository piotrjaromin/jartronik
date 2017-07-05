'use strict';

const React = require('react');
const axios = require('axios');
const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const PageHeader = require('react-bootstrap').PageHeader;
const OffersMenu = require('./OffersMenu');

class Offer extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {text: ""};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const offerName = this.props.params.splat;
        const self = this;
        axios.get(`offers/${offerName}`)
            .then( resp => { self.setState( {text: resp.request.response}) })
            .catch( err => console.log(`Error while getting offer. Details: ${err}`));     
    }


    handleClick() {}

    render() {

        return <Row>
                    <Col lg={3} md={3} sm={3} xs={12}>
                        <OffersMenu handleClick={this.handleClick}/>
                    </Col>
                    <Col lg={9} md={9} sm={9} xs={12}>
                        <Row>
                            <PageHeader>{this.props.location.state.name}</PageHeader>
                        </Row>
                        <Row>
                            <Row className="text-center">
                                <a href={this.props.location.state.image.replace("_s.jpg", "_xl.jpg")}>
                                    <img src={this.props.location.state.image} alt="a" />
                                </a>
                            </Row>
                            <Row className="padding-left-10px">
                                <span dangerouslySetInnerHTML={{__html: this.state.text}} />
                            </Row>
                        </Row>
                    </Col>
                </Row>

    }
};

module.exports = Offer;
