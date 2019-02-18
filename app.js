const express=require('express');
const pool=require("./pool");
const bodyParser=require('body-parser');
const querystring = require("querystring");
const fs=require("fs");
const cors=require("cors");
var app=express();
app.listen(3000);
app.use(express.static('public'));

app.use(cors({
  origin:["http://127.0.0.1:5500",
         "http://127.0.0.1:3000"],//允许列表
  credentials:true   //是否验证
}));

const session = require("express-session");
//4:对模块配置
app.use(session({
  secret:"128位随机字符串",   //安全令牌
  resave:false,              //请求保存
  saveUninitialized:true,    //初始化
  cookie:{                   //sessionid保存时
    maxAge:1000*60*60*24     //间1天 cookie
  }
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('module'));


// 主题页
app.get("/getCount",(req,res)=>{
  var aclass=req.query.aclass;
  var pageSize=req.query.pageSize;
  var obj={};
  if(aclass!='undefined'){
    sql = "select count(*) as c from nsh_news where class=?"
    pool.query(sql,[aclass],(err,result)=>{
      if(err) throw err;
      obj.pageCount=Math.ceil(result[0].c/pageSize);
      
      res.send(obj)
    })
  }else{
    sql = "select count(*) as c from nsh_news"
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      obj.pageCount=Math.ceil(result[0].c/pageSize);
      res.send(obj)
    })
  }
  
})
app.get("/news",(req,res)=>{
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  var aclass=req.query.aclass;
  if(!pno){
    pno=1;
  }
  if(!pageSize){
    pageSize=7;
  }
  var reg = /^[0-9]{1,}$/;
  if(!reg.test(pno)){
   res.send({code:-1,msg:"页码格式不正确"});
   return;
  }
  if(!reg.test(pageSize)){
  res.send({code:-2,msg:"页大小格式不正确"});
  return;
  }
  var sql="SELECT count(id) as c FROM nsh_news";
  obj = {code:1};
  var progress=0;
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    var pageCount=Math.ceil(result[0].c/pageSize);
    obj.pageCount=pageCount;
    progress+=50;
    if(progress==100){
        res.send(obj);
    }
  });
  if(aclass!='undefined'){
    var sql="SELECT * FROM nsh_news where class=? order by ntime desc LIMIT ?,? ";
    var offset=parseInt(pno-1)*pageSize;
    pageSize=parseInt(pageSize);
    pool.query(sql,[aclass,offset,pageSize],(err,result)=>{
      if(err) throw err;
      obj.data=result;
      progress+=50;
      if(progress==100){
          res.send(obj);
      }
    });
  }else{
    var sql="SELECT * FROM nsh_news order by ntime desc LIMIT ?,? ";
    var offset=parseInt(pno-1)*pageSize;
    pageSize=parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err) throw err;
      obj.data=result;
      progress+=50;
      if(progress==100){
          res.send(obj);
      }
    });
  }
  
})
//注册
app.post("/register",bodyParser.json(),(req,res)=>{
  var obj = req.body.data;
  var uname = obj.uname;
  var upass = obj.upass;
  var sql = "INSERT INTO nsh_login VALUES(null,?,md5(?))";
  pool.query(sql,[uname,upass],(err,result)=>{
      if(err)throw err;
      if(result.affectedRows>0){
          res.send({code:1,uname:uname})
      }else{
          res.send({code:-1,msg:"注册失败"});
      }
  })
});
//登录
app.post("/getLogin",bodyParser.json(),(req,res)=>{
  var obj = req.body.data;
  var uname = obj.uname;
  var upass = obj.upass;
  var sql = "SELECT * FROM nsh_login WHERE uname=? AND upass=md5(?);";
  pool.query(sql,[uname,upass],(err,result)=>{
      if(err)throw err;
      if(result.length == 1){
          req.session.uid = result[0].uid;
          res.send({code:1,msg:"登陆成功"})
      }else{
          res.send({code:-1,msg:"用户名或密码有误"})
      }
  })
})
//检测用户名是否存在
app.post("/hasName",bodyParser.json(),(req,res)=>{
  var uname = req.body.data.uname;
  var sql = " SELECT count(uid) as c FROM nsh_login WHERE uname = ?";
  pool.query(sql,[uname],(err,result)=>{
      if(err) throw err;
      if(result[0].c > 0){
          res.send({code:-1,msg:"该用户名已注册"})
      }else{
          res.send({code:1,msg:"欢迎使用"})
      }
  })
})


//登录个人中心
app.post("/loginAbj",bodyParser.json(),(req,res)=>{
  var uid =req.session.uid;
  var sql = "SELECT uname FROM nsh_login WHERE uid = ?"
  pool.query(sql,[uid],(err,result)=>{
      if(err) throw err;
      var obj = {code:1};
      obj.uid = uid
      obj.data = result;
      res.send(obj)
  })
})