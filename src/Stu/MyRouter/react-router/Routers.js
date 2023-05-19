import React, { Component } from 'react'
import ctx from './Router-Context'
import MacthParams from '../MacthParams'
export default class Routers extends Component {
    ReoutersReound = ({location})=>{
        let Children = [];
        if(Array.isArray(this.props.children)){
            Children = this.props.children
        }else if(typeof this.props.children === 'object'){
            Children = [this.props.children]
        }
        for (const child of Children) {
            let {path = '/', exact = false , strict = false , sensitive = false } = child.props
        
            let rest = MacthParams(path,location.pathname,{exact,strict,sensitive})
            if(rest){
                return child
            }
           
        }
        return null
    }
  render() {
    return <ctx.Consumer>
        {this.ReoutersReound}
    </ctx.Consumer>
  }
}
