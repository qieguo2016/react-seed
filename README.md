# react-seed

webpack + react + react-router + react-redux 搭建纯静态页面型前端工程解决方案模板。

### 业务开发

##### 目录结构

``` js
.
├── mock/                          # 假数据文件
├── package.json                   # 项目配置
├── README.md                      # 项目说明
├── src                            # 源码目录
│   ├── actions/                   # redux的action
│   ├── api/                       # api
│   ├── components/                # 纯UI组件
│   │   ├── a/                     # a组件
│   │   ├── b                      # b组件
│   │   │   ├── b.js               # b组件入口
│   │   │   └── b.scss             # b组件样式
│   │   └── Root.js                # Root组件，应用骨架
│   ├── containers/                # 容器,连接UI组件和状态仓库
│   │   └── App.js                 # 应用结构（路由配置）
│   ├── imgs/                      # 图片资源
│   ├── pages                      # 页面
│   │   ├── a.js                   # a页面入口
│   │   ├── b.js                   # b页面入口
│   │   └── c.js                   # c页面入口
│   ├── plugins/                   # 第三方插件
│   ├── reducers/                  # redux迭代器
│   ├── styles/                    # 基础样式文件
│   ├── utils/                     # 工具类
│   ├── index.html                 # 应用骨架
│   ├── index.js                   # 应用入口
│   └── store.js                   # 状态仓库
├── .babelrc                       # babel配置
├── package.json                   # npm配置
├── README.md                      # readme文件
├── webpack.config.base.js         # webpack基础配置
├── webpack.config.dev.js          # 开发环境配置
└── webpack.config.prod.js         # 正式环境配置
```

### 本地开发

``` bash
$ npm run dev
```

### 编译

``` bash
$ npm run build
```

### 修改日志

#### 2016.11.12

- NEW


### License

MIT.
