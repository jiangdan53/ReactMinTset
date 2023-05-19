## saga
> 中文文档地址 : https://redux-saga-in-chinese.js.org/
- 本质
    - 在最开始的时候saga会启动一个saga任务
    - saga任务：这个任务是一个生成器函数，saga为任务提供了大量功能以供使用，这些功能是以指令的形式出现的，而且出现在yield位置，因此可以被saga中间件控制它的执行
- 特点 
    - 纯净(可以保证action的纯净，不在象thunk，promies一样需要对action进行特殊处理)
    - 强大
    - 灵活(可以被控制的中间件)
- 指令 **指令前面必须是yield,以确保指令的返回结果被saga控制**
    - 在saga任务中，如果yield了一个普通数据非指令，saga不做任何处理，仅仅将数据传递给yield表达式(把得到的数据放入到迭代器中去也就是将值当作next参数传递)，因此saga中，yield一个普通数据没有任何意义
    - saga需要你在yield后面放上一写saga指令(saga effects)， 如果放的是指令，saga中间件会更根据不同指令进行特殊处理，以控制整个任务的流程
    - 每个指令本质上就是一个函数，调用该函数后，会放回一个指令对象，saga会接收到该指令对象，进行各种处理
    - 指令对象:
    ```js
    {value:'具体指令'，done:fals}
    ```
    - take指令：【阻塞】监听某个action，如果action发生了，则会进行下一步处理，但是take指令只监听一次变化，yield得到的是一个完整的action对象
    - all指令：【阻塞】 该函数传入一个数组，数组中放入生成器，saga会等待所有的生成器全部完成后才会进现下一步处理
    - takeEvery指令:不断的监听某个action,当某个action到达之后运行一个生成器函数takeEvery永远不会结束当前的生成器
    - delay指令：用于产生一个延迟
    - put指令【阻塞取决于你是否使用】：saga用这个指令去dispatch去分发action
    - call指令：【阻塞取决于你是否使用异步函数】这是一个异步指令类似于promies中间件，发起异步获取数据，不需要then会将数据直接作为下一次yield的结果
      - 如果需要绑定this可以用这种方法 
      ```js
      yield call(需要绑定的this,异步函数，函数参数)
      或
      yield call({
          context；"需要绑定的this"，
          fn:异步函数
      })
      ```
    - apply指令：于call指令一样
        - 使用方式
        - 
        ```js
        yield apply(需要绑定的this,异步函数，[参数]) 
          ```
    -  select指令：用于得到当前redux仓库中的所有值
    - cps指令：【阻塞】用于有回调的异步请求
    - foek指令：用于开启一个新任务，该任务不会阻塞，该函数需要传入一个生成器函数
    - cancal指令：用于取消一个或多个任务,实际上取消的原理是来自generator的return方法，cancal可以不传递参数如果不传递参数则取消自己
    - takelastest指令：功能和takeEvery一致，只不过，会自动取消掉之前开启的任务
    - cancelled指令：判断当前任务是否被取消掉了
    -  race指令：【阻塞】竞赛，可以传递多个指令，当其中任何一个指令结束后，会直接结束于promies.race类似，返回的结果是最先完成的指令，并且该函数会自动取消之前的任务