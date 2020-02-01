import React from "react"
import Catalog from "./Catalog"
import { connect } from "react-redux"
import * as catalogActions from "../../actions/Catalog"
import { bindActionCreators } from "redux"

const mapStateToProps = (state) => ({
  products: state.catalog.products,
  isFetching: state.catalog.isFetching,
  error: state.catalog.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatalog: bindActionCreators(catalogActions.fetchCatalog, dispatch),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class CatalogPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCatalog()
  }

  render () {
    const { products } = this.props

    return (
      <Catalog products={products} />
    )
  }
}
