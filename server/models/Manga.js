const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
  rank: Number,
  title: String,
  url: String,
  chapters: Number,
  start_date: String,
  end_date: String,
  score: Number,
  image_url: String,
});

const Manga = mongoose.model("Item", mangaSchema);

module.exports = Manga;
