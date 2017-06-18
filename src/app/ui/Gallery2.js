'use strict';

const React = require('react');
const Gallery = require('react-photo-gallery');
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;

class MyGallery extends React.Component {

    constructor(params) {
        super(params)
    }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

    render() {

        const images =[
            {
                "src": "/galeria/original/DSC03835.JPG",
                "width": 394,
                "height": 700
            },
            {
                "src": "/galeria/original/DSC03836.JPG",
                "width": 1243,
                "height": 700
            },
            {
                "src": "/galeria/original/klasyczne_t02.jpg",
                "width": 525,
                "height": 700
            },
            {
                "src": "/galeria/original/klasyczne_t06.jpg",
                "width": 706,
                "height": 700
            },
            {
                "src": "/galeria/original/klasyczne_t20.jpg",
                "width": 527,
                "height": 700
            },
            {
                "src": "/galeria/original/n07.jpg",
                "width": 466,
                "height": 700
            },
            {
                "src": "/galeria/original/n10.jpg",
                "width": 713,
                "height": 700
            },
            {
                "src": "/galeria/original/n36.jpg",
                "width": 568,
                "height": 700
            },
            {
                "src": "/galeria/original/nowoczesny05.jpg",
                "width": 786,
                "height": 700
            }
        ]

        return <Row id="gallery">
            <Gallery photos={images} onClickPhoto={this.openLightbox} />
            </Row>
    }

};

module.exports = MyGallery;