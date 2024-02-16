var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index"); //Import routes for "index" area of site
var usersRouter = require("./routes/users"); //Import routes for "users" area of site
var catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site
//const wiki = require("./routes/catalog.js");

var app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB =
  "mongodb+srv://abdulmanafaliu414:ButanE90@cluster0.cq5vh8t.mongodb.net/?retryWrites=true&w=majority";
//"mongodb+srv://abdulmanafaliu414:ButanE90@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);
//==app.use("/wiki", wiki);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
