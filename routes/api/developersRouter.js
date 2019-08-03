const express = require("express");
const bodyPerser = require("body-parser");
const Developers = require("../../models/developers");
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");
const developerRouter = express.Router();
developerRouter.use(bodyPerser.json());
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./upload/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.endsWith(".pdf")) {
    return cb(new Error("Please upload a pdf!"));
  }

  cb(undefined, true);
};

const upload = multer({
  storage,
  limits: {
    fieldSize: 1024 * 1024 * 5
  },
  fileFilter
});

developerRouter
  .route("/")
  .get(auth, (req, res, next) => {
    req.query.isblacklisted = false;
    req.query.archive = false;
    Developers.find({})
      .then(
        developers => {
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

developerRouter.post("/register", upload.single("resume"), (req, res, next) => {
  const skillsReplaced = req.body.skills.replace(/},/g, "@");
  const skillsSplit = skillsReplaced.split("@");
  const skills = skillsSplit.map((skill, index) => {
    if (index !== skillsSplit.length - 1) {
      return JSON.parse(`${skill}}`);
    } else {
      return JSON.parse(skill);
    }
  });

  console.log("asdasd", skills);
  const developer = new Developers({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    skills,
    score: req.body.score,
    experience: req.body.experience,
    category: req.body.category,
    location: req.body.location,
    availability: req.body.availability,
    costPerHour: req.body.costPerHour,
    contract: req.body.contract,
    reference: req.body.reference,
    email: req.body.email,
    phone: req.body.phone,
    linkedin: req.body.linkedin,
    github: req.body.github,
    isblacklisted: req.body.isblacklisted,
    reason: req.body.reason,
    note: req.body.note,
    archive: req.body.archive,
    resume: req.file.path
  });
  developer
    .save()
    .then(
      developer => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "multipart/form-data");
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
  console.log("Router", req.body);
  Developers.findByIdAndUpdate(
    req.params.developerId,
    {
      $set: {
        archive: req.body.archive,
        isblacklisted: req.body.isblacklisted,
        reason: req.body.reason,
        note: req.body.note
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
