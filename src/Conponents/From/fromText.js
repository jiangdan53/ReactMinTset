import React from 'react'
import PropTypes from 'prop-types'
import MyProptypes from '../../unit/propsTypes'
import DateList from '../comentWith'
class fromItem extends React.Component{
    static propTypes = {
        onChange:PropTypes.func,
        name:MyProptypes.BinString.isRequired,
        lovseList:MyProptypes.ArrPropTypes.isRequired,
        date:PropTypes.shape({
            vlue:PropTypes.string,
            text:PropTypes.string
        }).isRequired
      }
      render(){
          return (<label >
            <input
             type="checkbox" 
             value={this.props.date.vlue} 
             name={this.props.name} 
            checked={this.props.lovseList.includes(this.props.date.vlue)}
            onChange={(e)=>{
              this.props.onChange &&  this.props.onChange(e)
            }}
             />
             {this.props.date.text}
        </label>)
      }
}
export default DateList(fromItem)