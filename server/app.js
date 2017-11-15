const path = require('path');
const Koa2 = require('koa');
const convert = require('koa-convert');
const views = require('koa-views');
const koaStatic = require('koa-static');
const koaLogger = require('koa-logger');
const bodyParser = require('koa-bodyparser');


const config = require('../config/config.js');
const routers = require('./routers/index');


const app = new Koa2();

// 配置控制台日志中间件
app.use(convert(koaLogger()));

// 配置ctx.body解析中间件
app.use(bodyParser());

// 配置静态资源加载中间件
app.use(convert(koaStatic(path.join(__dirname, './../static'))));

// 配置服务端模版渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
	extension: 'ejs'
}))

// 初始化路由
app.use(routers.routes()).use(routers.allowedMethods());

// 监听启动端口
app.listen(config.prot, () => {
	console.log(`The server is start at prot ${config.prot}`);
});