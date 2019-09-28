import React from "react"
import PropTypes from "prop-types"
import { Carousel, Image } from "react-bootstrap"

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

    const items = images.map((item, index) => (
      <Carousel.Item key={index}>
        <Image
          src={item} alt={`[${alt}]`}
          fluid
        />
      </Carousel.Item>
    ))

    return(
      <Carousel>
        {items}
      </Carousel>
    )
  }
}
