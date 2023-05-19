import React, { Component } from 'react'
import Text from './Redio'
import Getdate from '../../unit/SumTool'
import AddFrom from  './Addfrom'

export default class index extends Component {
    state = {
        date:{
            name: 'vlue',
            love: [{ vlue: '12', text: '123' }, { vlue: '13', text: '1123' }],
            lovseList: ['12'],
            vlue:'' 
        }
          
    }
    onChange = (e) => {
        this.but = e.target
        let vla = e.target.value
        let name = e.target.name
        console.log(vla,name)
        if (e.target.type === 'checkbox' && name === 'lovseList') {
            if (e.target.checked) {
                vla = [...this.state.lovseList,vla]
            } else {
                vla = this.state.lovseList.filter(it => it !== vla)
            }
        }
    
        this.setState({
            date:{
                ...this.state.date,
                [name]: vla

            }
        })
       
        console.log( {
            ...this.state.date,
            [name]: vla

        })
    }
    Addfrom = (name,vla)=>{
        this.setState({
            date:{
                ...this.state.date,
                love:[...this.state.date.love,
                    {
                        [name]:vla,
                        text:'tianjianl'
                    }]
            }
           
        })
    }

    componentDidMount =  ()=>{
         let Arr =  Getdate({url:'https://open.duyiedu.com/api/student/findAll'})
    // //   let  date =   Arr.map(it=>({vlue:it.id.toString(),text: it.name}))
    // //     this.setState({
    // //         loves:date
    // //     }) //使用async和await进行处理的时候可以使用这个方法
       Arr.then(res=>
        this.setState({
            date:{
                ...this.state.date,
                love:res.map(it=>({vlue:it.id.toString(),text:it.name}))
            }
            
        })
       )
    }
    render() {
        console.log('index Render')
        return (
        <>
          <Text {...this.state.date} onChange={this.onChange}></Text>
            <AddFrom onAdd={this.Addfrom} {...this.state.date} onChange={this.onChange}/>

            
        </>
          
        )
    }
}
