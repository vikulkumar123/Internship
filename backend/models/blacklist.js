const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blacklistSchema = new Schema(
  {
    reason: {
      type: String,
      possibleValues: ["reason 1", "reason 2", "reason 3", "reason 4"],
      required: true
    },
    note: {
      type: String,
      maxlength: 100,
      default: ""
    },
    isBlacklist: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Blacklist = mongoose.model("Blacklist", blacklistSchema);
module.exports = Blacklist;
