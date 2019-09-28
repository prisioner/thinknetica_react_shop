import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Carousel, Image } from "react-bootstrap"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

export default class ImageGallery extends React.PureComponent {
  static propTypes = {
    images: PropTypes.array.isRequired,
    alt: PropTypes.string,
  }

  static defaultProps = {
    images: [],
    alt: "",
  }

  state = {
    isOpen: false,
    photoIndex: 0,
  }

  render() {
    const { images, alt } = this.props
    const { isOpen, photoIndex } = this.state

    const items = images.map((item, index) => (
      <Carousel.Item key={index}>
        <Image
          src={item} alt={`[${alt}]`}
          onClick={() => this.setState({ isOpen: true, photoIndex: index })}
          fluid
        />
      </Carousel.Item>
    ))

    return(
      <Fragment>
        <Carousel>
          {items}
        </Carousel>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Fragment>
    )
  }
}
