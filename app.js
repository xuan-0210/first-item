const express = require('express');
const proRouter = require('./router/pro.js');
//console.log(userRouter);

const app = express();
const bodyParser = require('body-parser');

app.listen(8080);
app.use(express.static("pro"));

app.use(bodyParser.urlencoded({
	extended:false	//在解析为对象的时候，是否使用扩展的字符串模块qs，false表示不使用扩展的则会使用querystring
}));
//路由
app.use('/pro',proRouter);













