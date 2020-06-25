const express = require('express');
const router = express.Router();
const pool = require('../pool.js');

router.get("/v1/login/:uname",(req,res)=>{
	var $uname = req.params.uname;
	var $upwd = req.params.upwd;
	var sql = "select * from xz_user where uname=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})

router.get("/v1/login1/:uname&:upwd",(req,res)=>{
	var _uname = req.params.uname;
	var _upwd = req.params.upwd;
	console.log(_uname,_upwd);
	var sql = "select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})



router.get("/v1/list",(req,res)=>{
	var sql = "select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
		// console.log(result);
	})
})

router.delete("/v1/del/:uid",(req,res)=>{
	var _uid = req.params.uid;
	console.log(_uid);
	var sql = "delete from xz_user where uid=?";
	pool.query(sql,[_uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
		res.send("0");
		}
	})
})

router.get("/v1/search/:uid",(req,res)=>{
	var _uid = req.params.uid;
	var sql = "select uid,uanme,upwd,email,phone,user_name,fender from xz_user where uid=?";
	pool.query(sql,[_uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0");
		}
	})
})

router.put("/v1/update",(req,res)=>{
	var _$obj = req.body;
	console.log(_$obj);
	var sql = "update xz_user set ? where uid=?";
	pool.query(sql,[_$obj,_$obj.uid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})

router.get("/v1/insert",(req,res)=>{
	var _uname = req.query.uname;
	var sql = "select uname from xz_user where uname=?";
	pool.query(sql,[_uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})

router.post("/v1/insert1",(req,res)=>{
	var obj = req.body;
	// console.log(obj);
	var sql = "insert into xz_user set ?";
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
		// console.log(result);
	})
})

module.exports = router;









