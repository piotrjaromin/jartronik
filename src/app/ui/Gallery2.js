'use strict';

const React = require('react');
const Gallery = require('react-photo-gallery');
const Row = require('react-bootstrap').Row;
const Col = require('react-bootstrap').Col;
const Lightbox = require('react-images');

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

class MyGallery extends React.Component {

    constructor(params) {
        super(params)
        this.state = {lightboxIsOpen: false, currentImage: 0};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    handleImageLoad(event) {
        console.log('Image loaded ', event.target)
    }

  openLightbox(index, event){
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }
    closeLightbox(){
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious(){
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext(){
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        console.log("render gallery");

        return <Row id="gallery">
            <Gallery photos={images} onClickPhoto={this.openLightbox} />
            <Lightbox 
                theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
                images={images}
                backdropClosesModal={true}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                width={1600}
            />
            </Row>
    }

};

module.exports = MyGallery;