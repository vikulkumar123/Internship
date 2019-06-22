const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const developerSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    skills: [
      {
        type: String,
        default: ""
      }
    ],
    score: {
      type: Number,
      required: true
    },
    experience: {
      type: Number,
      required: true,
      min: 0
    },
    category: {
      type: String,
      possibleValues: [
        "Consultant",
        "Freelancer",
        "Inhouse team",
        "Remote worker"
      ]
    },
    location: {
      type: String,
      required: true
    },
    availability: {
      type: Number,
      required: true
    },
    costPerHour: {
      type: Number,
      required: true
    },
    contract: {
      type: String,
      possibleValues: ["Fixed", "Hourly"],
      default: "Fixed"
    },
    reference: {
      type: String
    },

    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    resume: {
      type: String,
      required: true
    },
    linkedIn: {
      type: String,
      default: ""
    },
    github: {
      type: String,
      default: ""
    },
    isblacklisted: {
      type: Boolean,
      default: false
    },
    blacklistReason: {
      type: String,
      possibleValues: ["reason 1", "reason 2", "reason 3", "reason 4"],
      required: true
    },

    blacklistNotes: {
      type: String,
      default: "",
      maxlength: 100
    },

    archive: {
      type: Boolean,
      default: false
    }
  },

  {
    timestamps: true
  }
);

const Developers = mongoose.model("Developer", developerSchema);
module.exports = Developers;
