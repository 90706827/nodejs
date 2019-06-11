# nodejs

nodejs demo

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i egg-init -g
$ egg-init nodejs --type=simple
$ cd nodejs
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

## 开发工具vscode

插件：

- **HTML Snippets**
- **HTML CSS Support** 
- **Debugger for Chrome** 
- **JQuery Code Snippets**
- **Path Intellisense**
- **Npm Intellisense**
- **Beautiful UI**
- **Typings Installer**
- **Bootstrap 3 Sinnpet**
- **Auto Rename Tag**
- **JavaScript Atom Grammar**
- **vscode-icon**
- **Atom One Dark Theme**
- **eggjs**



## 项目目录结构

--dome 项目根目录

----app 项目文件

------app.js (可选)

------middleware 中间件

------router.js 路由

------controller 控制器

------service 服务

------model 数据查询处理

------view 视图

------public 静态资源

------extend 扩展 自定义方法

----config 整个项目及插件的配置

----log 日志文件（不关心）

----node_modules 模块安装后存放（不关心）

----run 运行时（不关心）

----test 测试用例（关心）

----package.json （关心）



## 集成

### 视图模板引擎

<https://github.com/eggjs/egg-view-ejs