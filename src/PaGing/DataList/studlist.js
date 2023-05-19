import React, { Component } from 'react'

export default class studlist extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }
  render() {
    return (
    <tr>
        <td>{this.props.name}</td>
    </tr>
    )
  }
}
