## 在dva中model是一个非常重要的api它结合了redux，redux-saga,以及redux-thenk 用于处理数据以及建立数据仓库，
. 使用通过调用dva函数生成的对象model来传入一个对象 
. 传入对象的属性为namespace,state,reducers,effects,subscriptions
1. namespace 这是一个model的名字在其他组件中触发仓库中的值改变时需要使用该值作为type的开头，也是该model的命名
2. state 这个属性的值是作为仓库的初始值来使用的
3. reducers  这个属性是是redux的reducer，和action的集合，是一个对象 这里面的每个属性名是一个actionType后面的属性值为一个函数 类似于reducer处理函数，
4.  effects 这是一个对象 是redux-saga的集合 这里面的每个属性名也是一个actionType  ,每个属性为一个生成器函数，每个函数拥有两个参数
 1. 参数1 是一个action了
 2. 参数2  是一个effects对象saga拥有的方法他基本上都有
5. sunscriptions 这是一个对象  ，该对象中可以写入一些函数，会在model挂载阶段运行，且只在挂载是运行 只运行一次，是一个订阅属性 