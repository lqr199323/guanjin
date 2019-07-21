//导入连接池模块
const express=require("express");
//导入连接池模块
const pool=require("../pool.js");
//创建路由
var router=express.Router();
//创建用户注册路由 
router.post("/v1/userReg",(req,res)=>{
    //获取用户信息
    var obj=req.body;
    //执行sql语句
    pool.query("insert into guanjin_user set ?",[obj],(err,result)=>{
        if (err) throw err;
        result.affectedRows>0 ? res.send("1") : res.send("0")
    })
})
//创建用户注册路由; restful规则
router.get("/v1/userlogin",(req,res)=>{
    //获取用户信息
    var $uname=req.params.uname;
    var $upwd=req.params.upwd;
    //执行sql语句
    pool.query("select uname,upwd from guanjinx_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
        if(err)throw err;
        result.length>0 ? res.send("1") : res.send("0");
    })
})