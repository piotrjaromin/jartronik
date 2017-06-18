'use strict';

const React = require('react');
const axios = require('axios');

class Offer extends React.Component  {

    constructor() {
        super()
        this.state = {text: ""};
    }

    componentDidMount() {
        const offerName = this.props.params.splat;
        const self = this;
        axios.get(`offers/${offerName}`)
            .then( resp => { self.setState( {text: resp.request.response}) })
            .catch( err => console.log(`Error while getting offer. Details: ${err}`));     
    }

    render() {
        return <div>
            <span dangerouslySetInnerHTML={{__html: this.state.text}} />
        </div>
    }
};

module.exports = Offer;
