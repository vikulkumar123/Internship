const express = require("express");
const bodyPerser = require("body-parser");
const Developers = require("../../models/developers");
const auth = require("../../middleware/auth");
const developerRouter = express.Router();
developerRouter.use(bodyPerser.json());

developerRouter
  .route("/")
  .get(auth, (req, res, next) => {
    console.log(req.query);
    req.query.isblacklisted = false;
    req.query.archive = false;
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
  .post(auth, (req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on / route");
  })
  .put(auth, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on / route");
  })
  .delete(auth, (req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on / route");
  });

developerRouter.post("/register", auth, (req, res, next) => {
  Developers.create(req.body)
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
});

developerRouter.get("/blacklist", auth, (req, res, next) => {
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
});

developerRouter
  .route("/edit/:developerId")
  .get(auth, (req, res, next) => {
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
  .post(auth, (req, res, next) => {
    (res.statusCode = 403),
      res.end(
        "POST operation not supported on /developers/" + req.params.developerId
      );
  })
  .put(auth, (req, res, next) => {
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
  .delete(auth, (req, res, next) => {
    (res.statusCode = 403),
      res.end(
        "DELETE operation not supported on /developers/" +
          req.params.developerId
      );
  });

developerRouter.route("/dashboard/:developerId").put(auth, (req, res, next) => {
  Developers.findByIdAndUpdate(
    req.params.developerId,
    {
      $set: {
        archive: req.body.archive,
        isblacklisted: req.body.isblacklisted
      }
    },
    { new: true }
  )
    .then(
      developer => {
        console.log(req.body);
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
});

module.exports = developerRouter;
