//导入express模块
const express=require("express");
//导入中间件
const bodyParser = require('body-parser');
//导入用户路由
const userRouter=require("./routers/user.js");
//创建服务器
var app=express();
//绑定监听;
app.listen("8080");
//把资源静态托管到public
app.use(express.static("public"));
//使用中间件
app.use(bodyParser.urlencoded({ 
    extended: false
 }));
 //使用路由器,挂载到用户路由下
 app.use("/user",userRouter);