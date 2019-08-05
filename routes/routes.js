//引入express模块
const express=require('express');
const pool=require('../pool.js');
//创建路由对象
var router=express.Router();
router.post("/login",(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    var sql="select *from honor_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("true");
        }else{
            res.send("false");
        }
    })
})
router.post("/userRegister",(req,res)=>{
    var $obj=req.body;
    var sql="INSERT INTO honor_user SET ?";
    pool.query(sql,[$obj],function(err,result){
        if(err) throw err;
        console.log(result);
        //判断是否注册成功
        if(result.affectedRows>0){
          res.send("true");
        }
      });
})
router.post("/userRegister1",(req,res)=>{
    var $uname=req.body.uname;
    var sql="select *from honor_user where uname=?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("true");
        }else{
            res.send("false");
        }
    })
})
// router.get("/",(req,res)=>{
//     var lid=req.query.lid;
//     var output={
//       product:{},
//       specs:[],
//       pics:[]
//     }
//     if(lid!==undefined){
//       var sql1=`select * from xz_laptop where lid=?`;
//       pool.query(sql1,[lid],(err,result)=>{
//         if(err) console.log(err);
//         output.product=result[0];
//         console.log(output);
//         var family_id=output.product["family_id"];
//         var sql2=`select spec,lid from xz_laptop where family_id=?`;
//         pool.query(sql2,[family_id],(err,result)=>{
//           if(err) console.log(err);
//           output.specs=result;
//           console.log(output);
//           var sql3=`select * from xz_laptop_pic where laptop_id=?`
//           pool.query(sql3,[lid],(err,result)=>{
//             if(err) console.log(err);
//             output.pics=result;
//             console.log(output);
//             res.send(output);
//           })
//         })
//       })
//     }else{
//       res.send(output);
//     }
//   })












module.exports=router;