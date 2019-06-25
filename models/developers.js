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
    skills: {
      type: String,
      default: ""
    },
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
      default: ""
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
      default: ""
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

    linkedin: {
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
    reason: {
      type: String,
      default: ""
    },

    note: {
      type: String,
      default: "",
      maxlength: 100
    },

    archive: {
      type: Boolean,
      default: false
    },
    resume: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true
  }
);

const Developers = mongoose.model("Developer", developerSchema);
module.exports = Developers;
