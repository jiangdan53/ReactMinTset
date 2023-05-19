## dva 
1.  这是一个第三方库但更像一个框架，他主要是整合了redux的相关内容，让我们处理数据更加容易，实际上，dva依赖很多比如react,react-touter,redux,redux-saga,react-redux,connected-react-router等
# dva的使用，
1. dva默认导出一个函数，通过调用该函数，可以得到一个dva对象，
2. dva用router 路由方式来启动它，传入一个函数，该函数返回一个React节点，将来，应用该节点 作为启动该程序的的虚拟dom，会自动渲染它
3. 启动使用创建喊得dva对象的start方法启动该程序，该函数需要传入选择器来确定一个真实的dom节点作为挂载虚拟dom的根节点，将组件渲染到该节点内
4. model 此节请异步到Dva文件的model文件下查看
5. sunscriptions 同上
6. dva函数参数配置信息
 1. 此参数为一个对象 对象的内容
 ```js
 {
  history:这是需要配置的路由方式(hash,或标准)
  initialState:这里是配置仓库的默认值
  onError：这个参数为一个错误处理函数里面有两个参数第一个参数是错误信息，第二个参数是action触发函数dispatch
  onAction：这里可以来配置redux中间件，参数方式一 中间件名字 ，方式二中间件数组
  onStateChange：当仓库中的状态发生变化的时候触发的函数 ，是一个函数属性，参数是仓库中的值
  onReducer：对模型中reducer进一步封装 需要调用原来的reducer  每一次reducer执行之前都会调用
  onEffect：类似于对模型中的effcet进一步封装 参数有四个 第一个参数为你model里面的effcetd第二个参数为
  onHmr：热替换
  extraReducers：是一个对象，对象的每一个属性是一个方法是一个需要合并的reducer 用于配置额外的reducer函数
  extraEnhancers ：额外的增强，他是用于来增强createStore函数，dva会将原来的仓库创建函数作为参数传递，放回一个新的用于创建仓库的函数 传递的函数因为一个数组形式的传递，考虑有多个增强
 }
 ```