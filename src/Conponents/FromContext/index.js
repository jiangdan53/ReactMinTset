import React, { Component } from 'react'
import{Provider} from './fromContext'
import PropTypes from 'prop-types'
import Input from './fromIput'
import FromBtu from './fromBtu'
export default class  From extends Component {
    state = {
        fromDate:{

        },
        onChange:(name,vla)=>{
            console.log(name,vla)
            this.setState({
                fromDate:{ ...this.state.fromDate,
                    [name]:vla}
               
            })
        },
        onSub:()=>{
            this.props.onSubmit(this.state.fromDate)
        }
    }
    static propTypes = {
        onSubmit:PropTypes.func
    }
  render() {
    return (
    <Provider value={this.state}>
        {this.props.children}
    </Provider>
    )
  }
}
From.Input = Input;
From.But  = FromBtu
