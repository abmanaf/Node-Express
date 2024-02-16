var express = require("express");
var router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", function (req, res) {
  res.send(book_controller.index);
});

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", function (req, res) {
  res.send(book_controller.book_create_get);
});

// POST request for creating Book.
router.post("/book/create", function (req, res) {
  res.send(book_controller.book_create_post);
});

// GET request to delete Book.
router.get("/book/:id/delete", function (req, res) {
  res.send(book_controller.book_delete_get);
});

// POST request to delete Book.
router.post("/book/:id/delete", function (req, res) {
  res.send(book_controller.book_delete_post);
});

// GET request to update Book.
router.get("/book/:id/update", function (req, res) {
  res.send(book_controller.book_update_get);
});

// POST request to update Book.
router.post("/book/:id/update", function (req, res) {
  res.send(book_controller.book_update_post);
});

// GET request for one Book.
router.get("/book/:id", function (req, res) {
  res.send(book_controller.book_detail);
});

// GET request for list of all Book items.
router.get("/books", function (req, res) {
  res.send(book_controller.book_list);
});

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get("/author/create", function (req, res) {
  res.send(author_controller.author_create_get);
});

// POST request for creating Author.
router.post("/author/create", function (req, res) {
  res.send(author_controller.author_create_post);
});

// GET request to delete Author.
router.get("/author/:id/delete", function (req, res) {
  res.send(author_controller.author_delete_get);
});

// POST request to delete Author.
router.post("/author/:id/delete", function (req, res) {
  res.send(author_controller.author_delete_post);
});

// GET request to update Author.
router.get("/author/:id/update", function (req, res) {
  res.send(author_controller.author_update_get);
});

// POST request to update Author.
router.post("/author/:id/update", function (req, res) {
  res.send(author_controller.author_update_post);
});

// GET request for one Author.
router.get("/author/:id", function (req, res) {
  res.send(author_controller.author_detail);
});

// GET request for list of all Authors.
router.get("/authors", function (req, res) {
  res.send(author_controller.author_list);
});

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get("/genre/create", function (req, res) {
  res.send(genre_controller.genre_create_get);
});

//POST request for creating Genre.
router.post("/genre/create", function (req, res) {
  res.send(genre_controller.genre_create_post);
});

// GET request to delete Genre.
router.get("/genre/:id/delete", function (req, res) {
  res.send(genre_controller.genre_delete_get);
});

// POST request to delete Genre.
router.post("/genre/:id/delete", function (req, res) {
  res.send(genre_controller.genre_delete_post);
});

// GET request to update Genre.
router.get("/genre/:id/update", function (req, res) {
  res.send(genre_controller.genre_update_get);
});

// POST request to update Genre.
router.post("/genre/:id/update", function (req, res) {
  res.send(genre_controller.genre_update_post);
});

// GET request for one Genre.
router.get("/genre/:id", function (req, res) {
  res.send(genre_controller.genre_detail);
});

// GET request for list of all Genre.
router.get("/genres", function (req, res) {
  res.send(genre_controller.genre_list);
});

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get("/bookinstance/create", function (req, res) {
  res.send(book_instance_controller.bookinstance_create_get);
});

// POST request for creating BookInstance.
router.post("/bookinstance/create", function (req, res) {
  res.send(book_instance_controller.bookinstance_create_post);
});

// GET request to delete BookInstance.
router.get("/bookinstance/:id/delete", function (req, res) {
  res.send(book_instance_controller.bookinstance_delete_get);
});

// POST request to delete BookInstance.
router.post("/bookinstance/:id/delete", function (req, res) {
  res.send(book_instance_controller.bookinstance_delete_post);
});

// GET request to update BookInstance.
router.get("/bookinstance/:id/update", function (req, res) {
  res.send(book_instance_controller.bookinstance_update_get);
});

// POST request to update BookInstance.
router.post("/bookinstance/:id/update", function (req, res) {
  res.send(book_instance_controller.bookinstance_update_post);
});

// GET request for one BookInstance.
router.get("/bookinstance/:id", function (req, res) {
  res.send(book_instance_controller.bookinstance_detail);
});

// GET request for list of all BookInstance.
router.get("/bookinstances", function (req, res) {
  res.send(book_instance_controller.bookinstance_list);
});

module.exports = router;
