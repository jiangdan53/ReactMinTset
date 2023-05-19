import React from 'react'


export default function withLog(Comp,time){
  let Acom = React.forwardRef((props,ref)=>{
      return <Comp {...props} Nweref={ref}/>

  })
    return class logwith extends React.Component {
        componentDidMount() { 
            // console.log(`日志：组件${Comp.name}被创建了${time}`)
         }
         componentWillUnmount() {
            // console.log(`日志：组件${Comp.name}被销毁了${time}`)

          }
        render() {
          return (
            <Comp {...this.props}/>
            )
        }
      }
}
