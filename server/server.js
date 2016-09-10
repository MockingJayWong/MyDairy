var express = require('express');
var morgan = require('morgan');


var hostname = 'localhost';
var port = 3000;

//express架构
var app = express();

//morgan中间件 request记录
app.use(morgan('dev'));

//使用route处理不同请求
var dishRouter = require('./dishRouter');

app.use('/dishes',dishRouter);

//静态页面的加载
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
