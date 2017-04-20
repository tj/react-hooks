
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hook extends Component {
  static propTypes = {
    willMount: PropTypes.func,
    didMount: PropTypes.func,
    willUnmount: PropTypes.func
  };

  constructor({ willMount, didMount, willUnmount }) {
    super()
    this.componentWillMount = willMount
    this.componentDidMount = didMount
    this.componentWillUnmount = willUnmount
  }

  render() {
    return null
  }
}
