## 项目初始化
### 一、安装TS脚手架
参考：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

### 二、webpack 相关
调整`webpack`配置最简单的方式就是在`vue.config.js`提供一个导出对象。该对象将会被`webpack-merge`合并入最终的`webpack`配置。

#### 1. 配置别名和代理
```js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    proxy: 'http://127.0.0.1:4000'
  },
}
```

#### 2. 配置rem适配
1. 安装依赖
> npm i postcss-pxtorem --save-dev

2. 配置webpack
```js
module.exports = {
  css: {
    sourceMap: true, // 设置css sourceMap
    loaderOptions: { // 
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 配置 rem
            rootValue : 37.5, // 换算的基数 默认100，作用 设计稿上元素宽375px,最终页面会换算成 10rem
            propList   : ['*'], // 需要把哪些样式换算成rem
            selectorBlackList: [], // 忽略转换正则匹配项（选择器）
            minPixelValue: 2, //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
    }
  }
}
```

## TypeScript Vuex
### 一、文件目录
```js
|--- store
 |---- songSheetList/                  歌单列表 Module
    |---- actions.ts                   actions           
    |---- getters.ts                   getters           
    |---- index.ts                     module 入口      
    |---- mutations.ts                 mutations           
    |---- state.ts                     state           
    |---- mutations-types.ts           对象类型接口               
 |---- songSheetObj/                   歌单详情 module      
 |---- index.ts                        vuex 入口       
 |---- type.ts                         对象类型接口  
```

### 二、初始化vuex
#### 1. index.ts
```js
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types'
import { SongSheetList } from './songSheetList'
import { SongSheetObj } from './songSheetObj'

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    SongSheetObj,
    SongSheetList
  }
}

export default new Vuex.Store<RootState>(store)
```

#### 2. typescript特有的`types.ts`文件:
```js
interface RootState {
  version: string
}

interface SongSheetObjState {
  songSheetObj: object
}

export {
  RootState,
  SongSheetObjState
}
```
这些代码与创建一个标准Vuex store 非常相似，但你应该注意稍显不同：
1. 一个`storeOpts`变量应使用`StoreOptions`类型去创建，并将泛型类型定义为`RootState`（定义根状态类型）
2. 同样new Vuex.Store需要使用`RootState`类型


#### 3. Module [songSheetList & songSheetObj]
因为 `songSheetList` 和 ` songSheetObj` 目录结构一样，所以这边用 `songSheetObj` 说明

##### 3.1 index.ts 入口文件
```js
import { Module } from 'vuex'
import { SongSheetObjState, RootState } from '@/store/types'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
const namespaced: boolean = true

const SongSheetObj: Module<SongSheetObjState, RootState> = {
  namespaced,
  state,
  actions,
  getters,
  mutations
}
export {
  SongSheetObj
}
```

PS: `Module` 是 `Vuex` 声明的 `interface` 文件
```js
// vuex/types/index.d.ts
export interface Module<S, R> {
  namespaced?: boolean;
  state?: S | (() => S);
  getters?: GetterTree<S, R>;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>;
}
```

看一下暴露类型，Module是一个简单的对象，将actions / mutation / getters / state聚合（可选）起来的和内部模块化策略。 

##### 3.2 actions.ts
```js
import { ActionTree } from 'vuex'
import { SongSheetObjState, RootState } from '@/store/types'
import { SongSheetObjParams } from '@/interface'
import type from './mutations-types'
import Api from '@/api'

const actions: ActionTree<SongSheetObjState, RootState> = {
  async getSongSheetObj({ commit }, payload: SongSheetObjParams): Promise<void> {
    const res: any = await Api.getSongSheetObj(payload)
    const { playlist, code } = res
    if(code === 200) {
      commit(type.GET_SONG_SHEET_OBJECT, playlist)
    }
  }
}

export default actions
```

为了导出正确的`Module`模型，我们需要将`actions`设置为`ActionsTree`类型，这是`Vuex`中定义的类型
```js
// vuex/types/index.d.ts
export interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}
```

##### 3.3 mutations.ts
```js
import { MutationTree } from 'vuex'
import { SongSheetObjState } from '@/store/types'
import type from './mutations-types'

const mutations: MutationTree<SongSheetObjState> = {
  [type.GET_SONG_SHEET_OBJECT] (state, payload): any {
    if(!payload) return false
    state.songSheetObj =  payload
  } 
}

export default mutations
```

`Mutations`与我们为`Actions`讨论的相同方法，并期望由`Vuex`定义的`MutationTree`类型的变量，如下所示：
```js
// vuex/types/index.d.ts
export interface MutationTree<S> {
  [key: string]: Mutation<S>;
}
```

##### 3.4 mutations-types
```js
const type = {
  GET_SONG_SHEET_OBJECT: 'GET_SONG_SHEET_OBJECT' // 获取歌单详细数据
}

export default type
```

##### 3.5 getters.ts
```js
import { GetterTree } from 'vuex'
import { SongSheetObjState, RootState } from '@/store/types'
  
const getters: GetterTree<SongSheetObjState, RootState> = {
  songSheetObj: (state): object => {
    return state.songSheetObj
  }
}

export default getters
```

##### 3.6 state.ts
```js
import { SongSheetObjState } from '@/store/types'
let state: SongSheetObjState = {
  songSheetObj: {}
}

export default state
```

### 三、项目中安装 `vuex-class` 来实现使用

> npm install vuex-class --save

#### 方式1：定义一个 `namespace` 命名空间
.vue
```js
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'

const SongSheetObjModule = namespace('SongSheetObj')

export default class SongList extends Vue {

    @SongSheetObjModule.Getter songSheetObj: any

    @SongSheetObjModule.Action getSongSheetObj: any
}
```

#### 方式2：通过指定`model`名称
.vue
```js
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Getter, Action, namespace } from 'vuex-class'

const SongSheetObjModule = namespace('SongSheetObj')

export default class SongList extends Vue {

   @Getter('songSheetObj', { namespace: 'SongSheetObj' }) songSheetObj: any

   @Action('getSongSheetObj', {namespace: 'SongSheetObj'}) getSongSheetObj: any
}
```

## Axios.ts 封装
**config.ts**
```js
const config = {
  timeout: 10 * 1000,
  headers: {
    'content-type': 'application/json'
  },
}

export default config
```


**http.ts**
```js
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '@/util/Api/config'

let axios = Axios.create(config)

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    const { status, data } = res
    if(status === 200 || status === 304) {
      return data
    } else {
      Promise.reject(res)
    }
    return res
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

const httpServer = (opts: object) => {
  return new Promise((resolve, reject) => {
    return axios(opts)
      .then((res: any) => {
        resolve(res)
      })
      .catch((err: any) => {
        console.log('axios constructor error', err)
        reject(err)
      })
  })
}

export default httpServer
```

### 参考
1. ts-cli: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create
2. js-cookie: https://github.com/js-cookie/js-cookie
3. rem: https://www.cnblogs.com/yc8930143/p/11273961.html
4. Vue Property Decorator: https://github.com/kaorun343/vue-property-decorator#Model
5. vuex-class: https://github.com/ktsn/vuex-class
6. vuex: https://juejin.im/post/5c46c625e51d456e4138fa82