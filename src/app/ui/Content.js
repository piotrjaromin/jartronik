'use strict';

const React = require('react');
const SuccessAlert = require('./alerts/SuccessAlert');
const ErrorAlert = require('./alerts/ErrorAlert');

const Col = require('react-bootstrap').Col;
const Row = require('react-bootstrap').Row;
const Jumbotron = require('react-bootstrap').Jumbotron;
const Button = require('react-bootstrap').Button;

class Content extends React.Component {
    render() {
        let successMsg = this.props.location.state && this.props.location.state.msg;
        let errorMsg = this.props.location.state && this.props.location.state.errorMsg;

        return <div>

            <SuccessAlert msg={successMsg}/>
            <ErrorAlert msg={errorMsg}/>

            <Jumbotron className="banner">
                <div className="container">
                    <Row>
                        <Col md={4} xs={0} lg={4}></Col>
                        <Col md={4} xs={12} lg={4}><img src="images/logo-jartronik.png"/></Col>
                        <Col md={4} xs={0} lg={4}></Col>
                    </Row>
                </div>
            </Jumbotron>

            <div className="container">
                <Row>
                    <p>Firma Jartronik istnieje na rynku polskim od 1988 r. </p>
                    <p>Od 1994 r. zajmujemy się wyłącznie systemami grzewczymi oraz doradztwem w doborze systemów dla budynków jednorodzinnych, bloków i firm.</p>

                    <p>Wykonujemy kompleksowo instalacje centralnego ogrzewania, centralnej wody użytkowej oraz kanalizacji w nowych jak i istniejących budynkach.</p>

                    <p>Montujemy:</p>
                    <ul>
                    <li>kotły na paliwa stałe firm: Żywiec, Protech Gierałtowice, Stalamark, Ogniwo, SAS, Galmet, Zębiec Dakon, Viadrus, Zgoda Wieprz, Brastal, Heiztechnik.</li>
                    <li>kotły gazowe firm: Saunier Douval, De Dirich, Junkers, Vailant, Paradigma.</li>
                    <li>W ofercie posiadamy systemy kominowe, rury dymne do kotłów kominków i gazu.</li>
                    <li>Montujemy instalacje solarne miedzy innymi niemieckich firm Paradigma oraz Galmet, Watt i Mora.</li>    
                    </ul>

                    <p> Wykonujemy usługi montażu wkładów kominowych oraz piecyków wielu europejskich i polskich firm.</p>

                </Row>
            </div>
        </div>
    }
};

module.exports = Content;
