import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyProptypes from '../../unit/propsTypes'
export default class text extends Component {
    static propTypes = {
      love:MyProptypes.rundeDate.isRequired,
      loginId:PropTypes.shape({
        name:MyProptypes.BinString,
        vlue:MyProptypes.BinString,
        dateName:MyProptypes.BinString
      }),
      onChange:PropTypes.func
    }
  render() {
    const InputLoves =  this.props.love.loves !== [] && this.props.love.loves.map(it => (
        <label key={it.vlue}>
            <input
             type="checkbox" 
             value={it.vlue} 
             id={this.props.love.dateName}
             ok={this.props.love.dateName}
             name={this.props.love.name} 
            checked={this.props.love.lovseList.includes(it.vlue)}
            onChange={(e)=>{
              this.props.onChange &&  this.props.onChange(e)
            }}
             />
             {it.text}
        </label>
    ))
    return (
      <div>
        {this.props.loginId.name ?   <p>
          用户名:<input type='text'ok={this.props.loginId.dateName}  id={this.props.loginId.dateName} name={this.props.loginId.name} value={this.props.loginId.vlue} onChange={e=>{
            this.props.onChange(e)
          }}></input>
        </p> : '' }
      
       <p>
          你的爱好:<label>
                {InputLoves}
          </label>
      </p>
      <p>你的城市：</p>
      </div>
   
    )
  }
}
