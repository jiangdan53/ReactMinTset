import React, { Component } from 'react'
import ctx from './Router-Context'
import MacthParams from '../MacthParams'
export default class Route extends Component {
    DomKey=()=>{
       return Math.random().toString(32).substring(2,4)
    }
    ChildrenMacth=(location)=>{
        let {exact = false ,strict = false, sensitive = false} = this.props
        return MacthParams(this.props.path ||'/',location.pathname,{
            exact,
            strict,
            sensitive
        })
       
    }
    renderChildren=(ctx)=>{
        //匹配成功 
        let DomArr  =[]
        if(ctx.match !== null){
        //children有值
        if( this.props.children !== undefined && this.props.children !== null){
            if(typeof this.props.children !== 'function'){
               if(typeof this.props.children === 'object'){
                const el = {...this.props.children,props:ctx,key:this.DomKey()}
                DomArr.push(el)
                
               }else{
                DomArr.push(this.props.children)

               }
            }
            else{
               DomArr.push(this.props.children(ctx))
            }
        }
            if(typeof this.props.render === 'function'){
                DomArr.push( this.props.render(ctx))
            }
            if(this.props.element){
                const el = {...this.props.element,props:ctx,key:this.DomKey()}
                DomArr.push(el)
            }
        //children没有值
        }else{
            return null;
        }
        return DomArr
        //
    }
    ConsumerChilde=(value)=>{
        const ctxvalue = {
            history:value.history,
            location:value.location,
            match:this.ChildrenMacth(value.location)
        }
        return <ctx.Provider value={ctxvalue}>
                    {this.renderChildren(ctxvalue)}
        </ctx.Provider>
    }
  render() {
    return (
     <ctx.Consumer>
        {this.ConsumerChilde}
     </ctx.Consumer>
    )
  }
}
