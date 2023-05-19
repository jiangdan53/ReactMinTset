import React, { Component } from 'react'

export default class index extends Component {
    state = {
        longId:{value:'',flg:false},
        longPas:{value:'',flg:false},
        sex:{value:'male',flg:false},
        loves:[
            {vlue:'Basketball',text:'篮球'},
            {vlue:'Football',text:'足球'},
            {vlue:'run',text:'跑步'},
            {vlue:'Bodybuilding',text:'健身'},
            {vlue:'music',text:'音乐'}
        ],
        lovesaggregate:{value:[],flg:false},
        city:{value:'chengdu',flg:false}

    }
    FromOnChang = (e) =>{
        let vla = e.target.value;
        let name = e.target.name; 
            let newdata = Object.assign({},this.state[name],{value:vla})
        if(name === 'lovesaggregate'){
            if(e.target.checked){
                newdata = Object.assign({},this.state[name],{value:[...this.state.lovesaggregate.value,vla]}) 
                console.log(newdata)
            }else{
                newdata = Object.assign({},this.state[name],{value:this.state.lovesaggregate.value.filter(it=>it !== vla)}) 

            }
        }
        this.setState({
           [name]:newdata
        })
    }
   
    
  render() {
      const  lvoesItem = this.state.loves.map(it => ( <label key={it.vlue}>
        <input type="checkbox" name='lovesaggregate'
        value={it.vlue} 
        checked={this.state.lovesaggregate.value.includes(it.vlue)} 
        onChange={this.FromOnChang}/>{it.text}
    </label>)
       
    )
    return (
      <div>
         {this.state.longId.flg ? '' : <p>用户名：<input type="text"  name='longId' value={this.state.longId.value} onChange={this.FromOnChang}/></p>} 
          <p>密码：<input type="password" name="longPas" value={this.state.longPas.value} onChange={this.FromOnChang}/></p>
          <p>性别：</p>
           <p>爱好：{lvoesItem}</p>
           <p>所在地: <select value={this.state.city.value} onChange={this.FromOnChang} name='city'>
                    <option value='chengdu'>成都</option>
                    <option value="bejing" >北京</option>
                    <option value="shanghai">上海</option>
               </select></p>
        
      </div>    
    )
  }
}
