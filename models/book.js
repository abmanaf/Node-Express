const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, require: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", require: true },
  summary: { type: String, require: true },
  isbn: { type: String, require: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

BookSchema.virtual("url").get(function () {
  return `/catalog/book/${this_id}`;
});

module.exports = mongoose.model("Books", BookSchema);
