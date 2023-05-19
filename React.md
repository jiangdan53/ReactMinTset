**生命周期函数只存在于类组件中而函组件是在每次调用时都是从新重复运行生命狗子函数，旧的组件即刻被销毁**
### React的生命周期
## 旧版生命周期函数
React版本号小于16.0.0这一版
1. constructor 
    1. 用一个组件只会调用一次该生命周期函数
    2. 这这个生命钩子函数中禁止使用this.setState来改变状态 
    因为在不能在挂载之前调用setState 为了避免出现bug
2. componentWillUnmount
    1.正常情况下这个生命钩子函只会运行一次
    2.  可以使用setstate, 但为了避免bug 不允许使用 因为在某些特殊情况下可能会调用多次
3. **render** 
    1. 返回一个虚拟Dom  , 会被挂载到虚拟Dom树中，最终渲到页面的真是Dom中
    2. render只要状态改变或者页面改变都会执行  所以这个钩子函数可能被多次执行
    3.严禁使用setstate 避免发生递归行渲染
4. **componentDidMount**
    1. 只会运行一次
    2. 可以使用setState
    3. 通常情况下用来异步获取数据发送网络请求 启动定时器等一开始需要的操作， 书写到该函数中
5. 组件进入活跃状态
6. componentWillReceiveProps
   1. 可以多次运行属性每次更新都会运行该函数
   2. 即将接受新的属性值
   3. 参数为新的属性对象
   4. 该函数可能会导致一些bug所以不推荐使用
7. **shouldComponentUpdate**
    1. 指示React是否需要更新渲染该组件
    2. 这里用于做组件的性能优化
8. componentWillUpadate
    1.  组件即将被重新渲染
9. componentDidUpadate
    1. 该生命周期函数经常被用做dom操作，改变元素
10. **componentWillUnmount**
    1. 通常这个函数是用来销毁一些组件的依赖资源 比如计时器
##  新版生命周期函数
    React版本号大于等于16.0.0
1. static  getDerivedStateFromProps
    **该函数在属性和状态改变时都会运行**
    1. 该函数可以返回两个参数用于获取新的属性和状态
    2. 该函数为静态函数
    3. 该函数的返回值会覆盖掉之前的组件状态
    4. 还函数几乎没有用得到的地方
2. getSnapshotBeforeUpdate
    1. 真实的Dom创建完成，但未渲染到实际页面中会执行该函数
    2. 在该函数中  通常用于实现一些附件的Dom操作
    3. 该函数的返回值会作为componentDidUpadate的第三个参数
## React组件的上下文Context 
 ### 上下文特点 Context
1.  当某个组件创建了上下文 上下文中的数据会被所有后代组件共享
2.  如果某个组件依赖了创建了上下文  那么这个组件的数据来源就不在单一 （外部数据仅来自于props）
3. 上下文的使用一般是针对与第三方的组件库
## Context旧的API
1. ## 上下文的创建方式
1. 只有类组件才能创建Context
2. ## 如何写
1. 给类组件一个静态属性childContextTypes,该属性是对上下文的数据类型进行数据类型的约束 
2. 添加实例方法getchildContext() 该方法返回的对象即为上下文中的数据(该数据必须满足类型约束) 该方法会在runder运行之后被调用 
## 使用上下文数据
要求： 如果使用上下文中的数据  你必须使用一个静态属性 contextTypes 来声明 该属性描述了需要获取的上下文中的数据类型
1. 使用
    1-1 可以在组件的构造函数中拿到第二个参数 就是上下文对象
    ## 1-2从组件的Context中拿到  ##
    1-3 在函数组件中 通过第二参数来拿到上下文数据
    ## 1-4 上下文的数据变化
    1-5 上下文的数据不可以直接变化
    在上下文中加入一个函数
## 新版API
旧版API存在严重的效率问题  并且容易导致滥用
1.  ## 创建上下文 ##    

1. 上下文是以个独立的对象 该对象使用React.createContext()创建
    返回的是一个包含两个属性的对象
    1. Provider属性：是一个组件 ，该组件会创建上下文 该组件有一个value属性用于改变上下文数据
    2. Consumer属性：此属性为一个组件为消费者组件是通用的组件在函数组件中是可用的 通过<ctx.Cnsumer>
        return {
            ()=>{
                <p>{context.xxx}</p>
            }
        }
    </ctx.Consumer>来使用上下文中的数据，
2. ##  使用上下文 ##
1.使用contextType 改属性为一个静态的属性 值为创建的上下文对象  React.createContext('这面可以是对象也可以是空') 
```js  
<ctx.Provider value={xxxx}>
    这里的value为上下文中的数据
</ctx.Provider>
 ```


 ##  Consumer 不需要静态属性只需要使用
 ```js
<ctx.Consumer>
            {
                ctx => {
                   return <p> 
                    consumer: {ctx.a}
                    </p>

                }
            }
</ctx.Consumer>
```

##  React错误边界
通常情况下一旦组件在**渲染期间**发生了错误就导致整个组件树被卸载，在我们开发者模式情况下
1. 解决方法有两种
    1. 方法一： componentDidCatch通过这个生命周期函数来，此函数有两个参数分别为错误信息(error)以及发生错误的组件(errorInfo)
    PS:运行时间渲染子节点过程中发生错误页面更新之后由于该函数运行时间比较靠后所以一般我们不在该函数中改变状态 会导致重新渲染耗费性能
    2. 注意：注意此函数应该在错误边界组件中使用， 或者更高一级的组件中使用 一旦发现错误代码里面没有对错误进行处理页面任然无法渲染 我们可以通过讲错误组件信息提交到state中通过判断状态中是否有值来选择是否渲染该组件 因此必须拿到错误并且将错误信息上传渲染备用组件
    3. 该函数通常用于如发现错误并将错误日志上传
2. 方法二
        1. 此方法为一个静态函数（static）
 ```js
        static getDerivedStateFromError(err){
            ///参数为错误对象
        }
```
##  getDerivedStateFromError用法
    运行时间是在渲染子组件过程中发生错误之后，在页面更新之前
1.  该函数会返回一个对象React会将该返回对象覆盖掉state中的值
2.  用法该函数通常用于改变状态
    
##  细节
1. 某些错误。错误组件无法无法捕获
    1. 自身错误
    2. 异步错误
    3. 事件中的错误
总结：仅处理渲染子组件期间的同步错误
## React中的事件
这里的事件是指：React内置组件中的事件
1. 所有的事件都是通过给document上注册的事件队列
2. 几乎所有元素的处理事件，均在document的事件中处理
3. 在document的事件处理，React会根据虚拟Dom树的完成事件函数调用
4. React的事件参数，并非真实的Dom事件参数，而是React合成的事件参数对象，该对象类似于真实的DOM事件对象
    1. 在React元素的事件上使用stopPropagation , 并非直接阻止了该元素在真实DOM树中的冒泡而是阻止的是在React虚拟Dom树中的冒泡，
    2. 可以使用事件参数e.nativeEvent来在React中获得真实的Dom操作对象
    3. 可以通过e.nativeEvent.stopImmediataPropagetion()来阻止document上的剩余事件执行
    4. 为了提升执行效率React使用事件对象池来处理事件对象
    5. 可以通过e.persist()这个事件来时实现虚拟DOM事件对象的持久化
    6. 一些不冒泡的事件是直接在元素上面监听
    7. 一些document上没有的事件是直接在元素上监听
## 注意事项
1. 如果给真实的DOM组车事件，阻止了事件冒泡则会导致React中的事件无法执行
2. 如果给真实的DOM组车事件，真实DOM事件会先于React事件去执行
3. 通过React的事件中阻止事件冒泡，是无法阻止真实的DOM是见冒泡的
4.  可以通过e.nativeEvent.stopImmediataPropagetion()来阻止document上的剩余事件执行
5. 不要异步的使用React中的DOM事件对象，因为他们可能是同一个对象，


## 工具

### 严格模式
StrictMode(```React.StrictMode```),本质是一个组件，该组件不进行渲染
(```React.Fragment<></>```),他的作用是，在渲染内部组件时，发现不适合的代码。
 - 识别不安全的生命周期
 - 关于是使用过时的字符串 ref API 的警告
 - 关于作废的 findDOMNode
 - 检测意外的副作用 
 - 检测过时的Content API

 ## Profiler
## CSSTransition类名变化过程
```js
classNames={{

            exitActive:'eixt-active',
            exitDone:'exit-done',
            enterActive:'enter-active',
            enterDone:'enter-done',
            appearActive:'appear-active'
         }}
```
当in为true时的类名变化过程 设置了 appear(初次出现是否有动画)appear-active(设置初次动画) 初次加载时出现规定时间过后进入enter-done(第一次渲染后的类名)enter-active(当in从false到true时类名先为enter-active对应的类名)到enter-done(变化完成的类名)
当in为false时的类名变化过程 先将类名变化为eixt-active(退出中的动画)exit-done(完全退出后变化的类名)
1. in为true
初次渲染类名变化appearActive到enterDone
第二次渲染类名变化enterActive到enterDone
2. in为false
这个时候状态从exitActive到exitdone
3. 切换时从enterDone到exitActive到exitDone当再次变化时为enterActive到enterDone
#### React路由
### 路由组件
React-router 为我们提供了两个组件
## Router组件
不做任何展示，仅提供路由配置，该组件还会产生一个上下文参数，上下文中会提供一些实用的对象和方法，供其他相关组件使用
1. HashRouter:该组件使用hash模式匹配
2. BrowserRouter：该组件使用BrowserHistory模式进行匹配
通常情况下Router组件只有一个并且包裹整个页面 
## Route组件
1. path:匹配的路径
    1. 默认情况下不区分大小写 可以设置sensitive属性为true来控制路径的大小写
    2. 默认情况下，只匹配初始目录，如要去精确匹配需设置exact为true来精确怕匹配
    3. 如果不写path，则会任意匹配路径
2. component:匹配成功后显示的组件
3. childern
 1. 传递react元素，无论是否匹配成功都会渲染该元素或组件，会忽略掉component的属性
 2. 传递一个函数，该函数有多个参数，参数来自于上下文中的参数，该函数返回一个react元素，则一定会渲染该元素，并且忽略掉component
## Switch组件
写到Switch组件中的Route组件，当匹配到第一个成功的路径则会停止匹配
由于Switch组件会循环渲染所有子元素，然后让每个子元素完成匹配，若匹配成功，则渲染相对应得组件，然后停止渲染，因此不能在Switch组件中写非Route的组件，包括react组件

