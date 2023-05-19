import React from  'react'
import PropTypes  from 'prop-types'
export default function  getFroms (Copm){
  return  class roudenDate extends React.Component{
        static defaultProps  = {
            love:[],
        }
        static propTypes = {
            love:PropTypes.arrayOf(PropTypes.shape({
                vlue:PropTypes.string.isRequired,
                text:PropTypes.string.isRequired
            }))
        }
      
        render(){
            let Com = this.props.love.map(it => <Copm key={it.vlue} name={this.props.name} {...this.props} date={it}/>)
            return  <>
                {Com}
            </>
        }
    }
}