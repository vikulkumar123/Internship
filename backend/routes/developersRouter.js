const express = require("express");
const bodyPerser = require("body-parser");
const Developers = require("../models/developers");
const developerRouter = express.Router();
developerRouter.use(bodyPerser.json());
var authenticate = require("../authenticate");

developerRouter
  .get("/", authenticate.verifyAdmin, (req, res, next) => {
    console.log(req.query);
    req.query.isblacklisted = false;
    Developers.find(req.query)
      .then(
        developers => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(developers);
        },
        err => {
          next(err);
        }
      )
      .catch(err => {
        next(err);
      });
  })
  .post(authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on / route");
  })
  .put(authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on / route");
  })
  .delete(authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on / route");
  });

developerRouter.post(
  "/register",
  authenticate.verifyAdmin,
  (req, res, next) => {
    Developers.create(req.body)
      .then(
        dish => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dish);
        },
        err => {
          next(err);
        }
      )
      .catch(err => {
        next(err);
      });
  }
);

developerRouter.get(
  "/blacklist",
  authenticate.verifyAdmin,
  (req, res, next) => {
    Developers.find({ isblacklisted: true })
      .then(
        list => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(list);
        },
        err => {
          next(err);
        }
      )
      .catch(err => {
        next(err);
      });
  }
);

developerRouter
  .get("/:developerId", authenticate.verifyAdmin, (req, res, next) => {
    Developers.findById(req.params.developerId)
      .then(
        developer => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(developer);
        },
        err => {
          next(err);
        }
      )
      .catch(err => {
        next(err);
      });
  })
  .post(authenticate.verifyAdmin, (req, res, next) => {
    (res.statusCode = 403),
      res.end(
        "POST operation not supported on /developers/" + req.params.developerId
      );
  })
  .put(authenticate.verifyAdmin, (req, res, next) => {
    Developers.findByIdAndUpdate(
      req.params.developerId,
      { $set: req.body },
      { new: true }
    )
      .then(
        developer => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(developer);
        },
        err => {
          next(err);
        }
      )
      .catch(err => {
        next(err);
      });
  })
  .delete(authenticate.verifyAdmin, (req, res, next) => {
    (res.statusCode = 403),
      res.end(
        "DELETE operation not supported on /developers/" +
          req.params.developerId
      );
  });

module.exports = developerRouter;
