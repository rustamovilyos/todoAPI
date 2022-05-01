import React, { Component, Fragment } from 'react'
import Form from './Form'
import List from './List'

export class DashBoard extends Component {
  render() {
    return (
      <Fragment>
          <Form/>
          <List/>
      </Fragment>
    )
  }
}

export default DashBoard