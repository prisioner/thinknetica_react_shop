import React from "react"
import { Container } from "react-bootstrap"

export default class CartContainer extends React.PureComponent {
  render () {
    const { children } = this.props

    return (
      <Container>
        {children}
      </Container>
    )
  }
}
