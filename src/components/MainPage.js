import React, { Fragment } from "react"
import CatalogPage from "./CatalogPage"
import { withRouter } from "react-router"
import { Alert } from "react-bootstrap"

@withRouter
export default class MainPage extends React.PureComponent {
  render() {
    const { state } = this.props.location

    return(
      <Fragment>
        { state && <Alert variant="danger">{state.message}</Alert> }
        <CatalogPage />
      </Fragment>
    )
  }
}
