import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <>
        <div className='top-tltli'>北京高校学生管理系统</div>
        <div className="top-usename">
            <span>尊敬的{this.props.name?this.props.name:'蒋老师'}</span>
            <button>退出</button>
        </div>
      </>
    )
  }
}
