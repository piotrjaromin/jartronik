'use strict';

const React = require('react');
const ImageGallery = require('react-image-gallery').default;
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;

class Gallery extends React.Component {

    constructor(params) {
        super(params)
    }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

    render() {

        const images = [{
                "original": "/galeria/original/DSC03835.JPG",
                "thumbnail": "/galeria/thumbnail/DSC03835_tn.JPG"
            },
            {
                "original": "/galeria/original/DSC03836.JPG",
                "thumbnail": "/galeria/thumbnail/DSC03836_tn.JPG"
            },
            {
                "original": "/galeria/original/klasyczne_t02.jpg",
                "thumbnail": "/galeria/thumbnail/klasyczne_t02_tn.jpg"
            },
            {
                "original": "/galeria/original/klasyczne_t06.jpg",
                "thumbnail": "/galeria/thumbnail/klasyczne_t06_tn.jpg"
            },
            {
                "original": "/galeria/original/klasyczne_t20.jpg",
                "thumbnail": "/galeria/thumbnail/klasyczne_t20_tn.jpg"
            },
            {
                "original": "/galeria/original/n07.jpg",
                "thumbnail": "/galeria/thumbnail/n07_tn.jpg"
            },
            {
                "original": "/galeria/original/n10.jpg",
                "thumbnail": "/galeria/thumbnail/n10_tn.jpg"
            },
            {
                "original": "/galeria/original/n36.jpg",
                "thumbnail": "/galeria/thumbnail/n36_tn.jpg"
            },
            {
                "original": "/galeria/original/nowoczesny05.jpg",
                "thumbnail": "/galeria/thumbnail/nowoczesny05_tn.jpg"
            }
        ];

        return <Row id="gallery">

                <Col lg={3} md={3} sm={0} xs={0}></Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <ImageGallery showPlayButton={false} items={images} slideInterval={2000} onImageLoad={this.handleImageLoad} />
                </Col>

                <Col lg={3} md={3} sm={0} xs={0}></Col>
            </Row>
    }

};

module.exports = Gallery;