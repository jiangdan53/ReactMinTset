import React, { Component } from 'react'
import {Consumer} from './fromContext'
export default class fromBtu extends Component {
  render() {
    return (
        <Consumer>
            {
                ctx =>{
                    return (
                        <button onClick={()=>{
                            ctx.onSub()
                        }}>
                            {this.props.children}
                        </button>
                    )
                }
            }
           
        </Consumer>
    )
  }
}
