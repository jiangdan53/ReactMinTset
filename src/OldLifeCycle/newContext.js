import React, { Component } from 'react'

const ctx = React.createContext()
class ContextB extends React.Component {
    /**
     * 申明类型
     * 需要的数据
     */
    static contextType = ctx

    render() {
        return <p>
            上下文B组件B={this.context.a}
            <button onClick={()=>{
                this.context.fun(this.context.a +1)
            }}>子组件+1</button>
        </p>
    }
}
function ContextA(props) {
    return <>
        <h1>上下文A组件 </h1>
        <ctx.Consumer>
            {
                ctx => {
                   return <p> 
                    consumer: {ctx.a}
                    </p>

                }
            }
        </ctx.Consumer>
        <ContextB />
    </>
}
export default class newContext extends Component {
    state = {
        a: 1,
        b: 'string',
        fun:(target)=>{
            this.setState({
                a:target
            })
        }
    }
    render() {
        let NewContext = ctx.Provider
        return (
            <NewContext value={this.state}>
                <div>
                    <ContextA />
                </div>

            </NewContext>
        )
    }
}
