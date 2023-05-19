import React, { Component } from 'react'
import {Router} from  '../react-router'
import {MyBrowserHistory} from '../index'
export default class BrowserRouter extends Component {
    history = MyBrowserHistory(this.props)
  render() {
    return (
        <Router history={this.history}>
            {this.props.children}
        </Router>
    )
  }
}
