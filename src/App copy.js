import React, { Component } from 'react'
// import Paging from './PaGing/paging.js'
import ThreeBar from './Conponents/Threebar'
// import From from './Conponents/From'
//  import FromHtml from './Conponents/From'
//  import {testwith1,testwith2} from './OldLifeCycle/testwith'
//  import withLog from './witiConment'
 import Banner from './Conponents/Banner'
//  import Context from './OldLifeCycle/OldContext'
// import Context from './OldLifeCycle/newContext'
// import From from './Conponents/FromContext/fromText'
import RenderProp  from  './Conponents/PureComponent/index'
//  const  Alog = withLog(testwith1,Date.now())
//  const Blog = withLog(testwith2,Date.now())
// import ReactDOM from 'react-dom'
import  Error from './conponentErrorr'
import ComError from './conponentErrorr/Error'
import Hook from './FunConponent'
import Transition from './Conponents/MyTransititon/trantiton'
import ReactTransition from './Conponents/ReactTransition'
import  {BrowserRouter} from 'react-router-dom'
export default class App extends Component {
    state = {
      
    }
    // componentDidCatch(err,info){
    //     this.setState({
    //         err:err,
    //         info:info
    //     })
    // }
    //   static getDerivedStateFromError(err,info){
    //     console.log(err,info)
    // }
//     Dom = null;
//   getSnapshotBeforeUpdate(){
    
//    return  ReactDOM.createPortal(<h1>你没有传入这是我自己的插槽</h1>,document.querySelector(".item1"))

//   }
//   componentDidUpdate(prevProps, prevState,snap){
//     console.log(document.querySelector('.item1'))
//     console.log(ReactDOM.createPortal(<h1>你没有传入这是我自己的插槽</h1>,document.querySelector(".item1")))
//     this.Dom = snap
//     }
    render() {
      
        return (
            <BrowserRouter>
        
            <div className='.createPortal'>
                <Transition />
                      <Hook />
                <ReactTransition />
                <Banner />
                    <ThreeBar itemLeft={<Error>
                        <ComError/>
                    </Error>}  itemRight={<p>我是传入的右边栏</p>}  >
                    {/* <Paging /> */}
                     <RenderProp />
                      </ThreeBar> 

                {/* <From /> */}
                {/* <Context />
                <FromHtml></FromHtml>
                <Alog id={1}/>
                <Blog id={2}/> */}
            </div>
            </BrowserRouter>
          
        )
    }
}
