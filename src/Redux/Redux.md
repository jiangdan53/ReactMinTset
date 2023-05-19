***Redux***
## Redux核心概念
1. 为什么要用Redux
 1. 在很久以前我们在网页上看到得页面是通过请求地址去得参数去获取服务器上得网页源代码  
  1. 原理是通过我们发送的url地址参数到服务器，服务器去拿到相对应的数据给到数据中心 数据中心将我们所请求的数据给到服务器中的HTML相对应的元素中，这个过完全是在后端人员手中完成相对来说较为繁琐 
  2. 这个过程称之为MVC
 2. 之后出现了前后端分离 
  1. 所以及衍生出了 前端效仿后端的MVC模型  
     1. 前端的MVC并不是后端的MVC只是为了便于理解所以我们称之为MVC
  2. 在Redux中有着action store redirect 这三个模块
   1. action这个模块主要作用是模拟url参数 将我们需要的操作给到 store 
   2. store是一个数据库这里可以理解为MVC中的Moude 数据库(模拟的后端数据库这个是我们浏览器的缓存数据) 我们接受到action并将action所携带的参数给到操作数据库的redirct中
   3. redirect是接受到action中的type属性并对相对应得属性值进行相对应得数据操作
 ## Redux详解
  1. action是一个plain-object(平面对象)及只能是一个对象
   1. 它指的是他的__proto__指向得就是一个Object.prototype的原型
  2. action中必须有type属性，该属性表示对数据的操作类型
   1. 但是type的类型并没有任何要求 
   2. 同常使用peyload作为附加数据（没有强制要求）
  3. 在大型项目中的action由于会有很多的操作类型 为了避免硬编码(hard code) ,会将action的类型做一些约束，将其存放在一个或一些单独的文件中作为样板代码
  4. 为了简洁代码 也为了方便传递一写action,我们会将action放在一个函数中来同一生成一些action对象
  # 1. action创建函数(action creator)因为纯函数无副作用的函数
    1. 不能改动参数
    2. 不可以有异步 
    3. 不可以对外部数据造成影响
  5. action 为了方便action利用action来创建函数来触发或者分发action，Redux提供了一个函数````bindActionCreators```该函数用于增强action创建改动函数的功能，它不仅可以创建action，并且创建完成后自动分发
 # 2. reducer 是接收值以及操作命令(action.type)给它返回一个新的数据
  1. 一个系统仓库，有且仅有一个reducer ，并且通常情况下，一个工程只能有一个仓库，因此一个系统或者工程只有一个reducer
  2. 为了方便管理reducer 我们会将reducer放在一个单独的文件夹中
  3.  reducer调用的时间 
   1. 通过store.dispatch ,分发了一个action的时候会调用reducer
   2. 当创建了与一个store的时候会调用一次reducer及刚创建一个仓库的时候会调用reducer
     1. 可以利用在创建仓库的时候不传递初始状态来调用reducer
     2.  将reducer的参数state设置一个默认值
    3. 在reducer中使用switch case 来操作
    4. **reducer必须是一个没有副作用纯函数**
     1. 为什么需要是纯函数 
        1. 纯函数有利于测试和调试
        2. 有利于还原数据
        3. 有利于将来和react结合是的优化
     2. 具体要求
        1. 不能改变参数 因此若要让状态变化，必须得到一个新的状态
        2. 不能有异步
        3. 不能对外部环境造成影响
     3. 因为在大中型项目中数据过于庞大，操作复杂，数据及结构也比较复杂，因此可以合理细分reducer 
      1. redux提供了方法，可以帮助我们更快更方便合并reducer
      2. combineReducers:和并reducer，得到一个新的reducer，该新的reducer管理一个对象该对象中的每一个属性交给对应的reducer管理
# 3.  store 是一个仓库 用与保存数据
   1. 通过createStore来创建一个仓库
   2. dispatch 分发一个action
   3. getState 得到仓库中当前的状态
   4. replaceReducer 替换掉当前的reducer
   5. subscribe 添加一个监听器
      1. 该监听器是一个无参函数，当分发一个action时会运行注册的监听器函数