'use strict';

require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('font-awesome-webpack');
require('../styles/main.scss');

const React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Footer = require("./ui/Footer"),
    Content = require("./ui/Content"),
    Navigation = require("./ui/Navigation"),
    Contact = require("./ui/Contact"),
    TestContent = require('./ui/SampleTest'),
    Offer = require('./ui/Offer'),
    mountNode = document.getElementById("app");

let Route = require("react-router/lib/Route");
let Router = require("react-router/lib/Router");
let IndexRoute = require("react-router/lib/IndexRoute");
let hashHistory = require("react-router/lib/hashHistory");


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Navigation/>
            <div>
                {this.props.children}
                <Footer/>
            </div>
        </div>
    }
}

class Container extends React.Component {

    render() {
        return <div className="container em3-bottom-padding">
            {this.props.children}
        </div>
    }
}

ReactDOM.render(<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Content}/>
            <Route path="" component={Container}>=
                <Route path="offers" component={Offer}/>
                <Route path="companies" component={TestContent}/>
                <Route path="contact" component={Contact}/>
            </Route>
        </Route>
    </Router>,
    mountNode);
