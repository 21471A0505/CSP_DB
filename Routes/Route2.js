const express = require("express");
const test = require("../server");
//const Mapping = require("./Operations");
const Router = express.Router();
Router.get("/", function (req, res) {
  res.send("Welcomee...!!!");
});
Router.get("/signup/select",function(req,res){
    const sql=`SELECT * FROM signup`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/signup/name",function(req,res){
    const sql=`SELECT name FROM signup`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/signup/email",function(req,res){
    const sql=`SELECT email FROM signup
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/signup/pass",function(req,res){
    const sql=`SELECT pass FROM signup
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});


module.exports = Router;