const express = require("express");
const Valids = require("../valid_db");
//const test = require('../maindb');
// const Mapping = require("./Operations");
const Router = express.Router();
//request
Router.post("/Insert", (req, res) => {
  let Details = req.body;
  console.log(Details);
  Valids("signup", "Insert", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

Router.delete("/Delete:ID", (req, res) => {
  let Details = req.params.ID;
  Valids("signup", "Delete", Details)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.put("/Update:ID", (req, res) => {
  let Details = req.params.ID;
  let UpdatedDetails = req.body;
  console.log(UpdatedDetails);
  console.log(Details);
  Valids("signup", "Update", Details, UpdatedDetails)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Read:_ID", (req, res) => {
  const Details = req.params._ID;
  Valids("signup", "Read", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
Router.get("/Dlogin:_ID", (req, res) => {
  const Details = req.params._ID;
  Valids("signup", "Dlogin", Details)
    .then((result) => {
      res.send({ Message: result.Message, Result: result.rows });
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

 
module.exports = Router;