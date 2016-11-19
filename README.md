# react-seed

webpack + react + react-router + react-redux 搭建纯静态页面型前端工程解决方案模板。

## 业务开发

#### 目录结构

``` js
.
├── mock/                          # 假数据文件
├── src                            # 源码目录
│   ├── actions/                   # redux的action
│   ├── api/                       # api接口定义
│   ├── components/                # 纯UI组件
│   │   ├── a/                     # a组件
│   │   ├── b                      # b组件
│   │   │   ├── b.js               # b组件入口
│   │   │   └── b.scss             # b组件样式
│   │   └── layout.js                # 应用骨架，包括公共导航页面，侧边栏等
│   ├── containers/                # 容器,连接UI组件和状态仓库
│   │   └── App.js                 # 应用，加载骨架和配置路由
│   ├── images/                      # 图片资源
│   ├── pages                      # 页面
│   │   ├── a.js                   # a页面入口
│   │   ├── b.js                   # b页面入口
│   │   └── c.js                   # c页面入口
│   ├── plugins/                   # 第三方插件
│   ├── reducers/                  # redux迭代器
│   │   ├── index.js               # 合并后的reducer
│   │   ├── a.js                   # 单个reducer
│   │   └── b.js                   # 单个reducer
│   ├── styles/                    # 基础样式文件
│   ├── utils/                     # 工具类
│   ├── index.html                 # 应用骨架
│   ├── entry.js                   # 应用入口
│   └── store.js                   # 状态仓库
├── .babelrc                       # babel配置
├── package.json                   # npm配置
├── README.md                      # readme文件
├── webpack.config.base.js         # webpack基础配置
├── webpack.config.dev.server_new.js          # 开发环境配置
└── webpack.config.prod.js         # 正式环境配置
```

#### 本地开发

``` bash
$ npm run dev
```

#### 编译发布

``` bash
$ npm run build
```

使用React开发时，要注意View与数据的彻底分离。在小型项目里面，即使不使用Redux，也要抽离出公共的state给各组件共享，同时集中管理。还有老生常谈的props与state的区分，做好这些数据的定义之后，组件化的层次分明才能出来。


### 修改日志

#### 2016.11.12

- NEW


### License

MIT.
