const express = require("express");
const test = require("../server");
//const Mapping = require("./Operations");
const Router = express.Router();
Router.get("/", function (req, res) {
  res.send("Welcomee...!!!");
});
Router.get("/volunteer/select",function(req,res){
    const sql=`SELECT * FROM volunteer`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/volunteer/name",function(req,res){
    const sql=`SELECT name FROM volunteer`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/volunteer/email",function(req,res){
    const sql=`SELECT email FROM volunteer
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/volunteer/gender",function(req,res){
    const sql=`SELECT gender FROM volunteer
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/volunteer/city",function(req,res){
    const sql=`SELECT city FROM volunteer
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
})
Router.get("/volunteer/dob",function(req,res){
    const sql=`SELECT dob FROM volunteer
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/volunteer/phone",function(req,res){
    const sql=`SELECT phone FROM volunteer
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/volunteer/education",function(req,res){
    const sql=`SELECT education FROM volunteer
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
});
Router.get("/volunteer/job",function(req,res){
    const sql=`SELECT job FROM volunteer
`;
    test(sql)
        .then((result)=>{
            res.send(result.rows);
        })
        .catch((err)=>{
            res.send(err);
        });
})

module.exports = Router;