'use strict';

const React = require('react');
const SuccessAlert = require('./alerts/SuccessAlert');
const ErrorAlert = require('./alerts/ErrorAlert');

const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const Jumbotron = require('react-bootstrap').Jumbotron;
const Button = require('react-bootstrap').Button;

class Contact extends React.Component {

    constructor(params) {
        super(params)
    }

    render() {
        return <Jumbotron className="contact maring-up-1em">
            <Row>
            </Row>    

                    <Row>
                        <Col md={6}>
                           
                                <h3 className="line-height-20p"><i className="fa fa-home fa-1x contact-line"></i>&nbsp;Adres:</h3>               
                                <p className="contact-value">ul. Warszawska 390b, 43-155 Bieruń</p>
                                <br />
                                <br />
                                <h3 className="line-height-20p"><i className="fa fa-envelope fa-1x contact-line"></i>&nbsp;E-mail:</h3>
                                <p className="contact-value">jartronik@o2.pl</p>
                                <br />
                                <br />
                                <h3 className="line-height-20p"><i className="fa fa-user fa-1x contact-line"></i>&nbsp;Właściciel:</h3>
                                <p className="contact-value">Stanisław Jaromin</p>
                                <br />
                                <br />
                                <h3 className="line-height-20p"><i className="fa fa-phone fa-1x contact-line"></i>&nbsp;Telefon:</h3>
                                <p className="contact-value">+48 501 762 405</p>
                        </Col>
                        <Col md={6}>
                                 <iframe width="565" height="430" frameBorder="0" className="borderless" allowfullscreen src="https://maps.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=&amp;q=Jartronik.+Stanis%C5%82aw+Jaronin,+Warszawska,+Bieru%C5%84&amp;aq=1&amp;oq=jart&amp;sll=51.953751,19.134379&amp;sspn=8.168008,19.753418&amp;ie=UTF8&amp;hq=Jartronik.+Stanis%C5%82aw+Jaronin,&amp;hnear=Warszawska,+43-150+Bieru%C5%84,+bieru%C5%84sko-l%C4%99dzi%C5%84ski,+%C5%9Bl%C4%85skie&amp;t=m&amp;cid=17475102868437811941&amp;ll=50.069426,19.190025&amp;spn=0.026444,0.054932&amp;z=14&amp;iwloc=A&amp;output=embed&amp;amp;wmode=transparent" >
                                 </iframe>
                        </Col>

                    </Row>

                </Jumbotron>

    }
}


module.exports = Contact;
