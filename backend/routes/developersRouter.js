const express = require("express");
const bodyPerser = require("body-parser");
const Developers = require("../models/developers");
const Blacklist = require("../models/blacklist");
const developerRouter = express.Router();
developerRouter.use(bodyPerser.json());

developerRouter
  .route("/")
  .get((req, res, next) => {
    Developers.find({})
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
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on / route");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on / route");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on / route");
  });

developerRouter.post("/register", (req, res, next) => {
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
});

developerRouter
  .route("/:developerId")
  .get((req, res, next) => {
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
  .post((req, res, next) => {
    (res.statusCode = 403),
      res.end(
        "POST operation not supported on /developers/" + req.params.developerId
      );
  })
  .put((req, res, next) => {
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
  .delete((req, res, next) => {
    (res.statusCode = 403),
      res.end(
        "DELETE operation not supported on /developers/" +
          req.params.developerId
      );
  });

developerRouter.route("/blacklist").get((req, res, next) => {
  Blacklist.find({ isBlacklist: true })
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
});
module.exports = developerRouter;
