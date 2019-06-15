var express = require("express");
var router = express.Router();
var Developers = require("../models/developers");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

/* GET users listing. */
router
  .route("/")
  .get((req, res, next) => {
    Developers.find({})
      .then(
        developers => {
          res.setStatus = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(developers);
        },
        err => {
          next(err);
        }
      )
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Contennt-Type", "plain/text");
    res.end("Post Operation did not supported");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Contennt-Type", "plain/text");
    res.end("PUT Operation did not supported");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Contennt-Type", "plain/text");
    res.end("DELETE Operation did not supported");
  });

router
  .route("/create")
  .get((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Contennt-Type", "plain/text");
    res.end("GET Operation did not supported");
  })
  .post((req, res, next) => {
    Developers.create(req.body)
      .then(
        developer => {
          res.setStatus = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(developer);
        },
        err => {
          next(err);
        }
      )
      .catch(err => next(err));
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Contennt-Type", "plain/text");
    res.end("PUT Operation did not supported");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.setHeader("Contennt-Type", "plain/text");
    res.end("DELETE Operation did not supported");
  });

module.exports = router;
