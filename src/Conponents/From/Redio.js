import React,{Component} from 'react'
import PropTypes from 'prop-types'
import MyProptypes from '../../unit/propsTypes'
import DateList from '../comentWith'
import  utlDate from '../../unit/dateObj'
  class Rediolsit extends Component{

      static propTypes = {
          date:MyProptypes.dateTypes.isRequired,
          name:MyProptypes.BinString.isRequired,
          onChenge:PropTypes.func,
      }
      shouldComponentUpdate(newprops,newstate){
          if(utlDate(this.props.love,newprops.love) && utlDate(this.state,newstate)){
                return  false
            }
            
       return true
    }

      render(){
        console.log('render' ,this.props)
          return <>
            <label>{this.props.date.text}
            <input type="radio" 
              name={this.props.name} 
            value={this.props.date.vlue}
             checked={this.props.vlue === this.props.date.vlue}
              onChange={(e)=>{
              this.props.onChange   &&  this.props.onChange(e)
            }
        }/>
          </label>
          </>
      }
 }
 export default DateList(Rediolsit)