//使用express模块
const express = require('express');
//引入连接池
//引入路由器
const useRouter=require('./routes/routes.js');
//引入body-parser
const bodyParser=require('body-parser');
//创建服务器
var app=express();
app.listen(8080);
//使用body-parser中间件，将post请求的数据格式化为对象
app.use( bodyParser.urlencoded({
    extended:false
  }) );
//挂载路由器
app.use('/use',useRouter);
//托管静态资源
app.use(express.static('public'));