const axios = require('axios');
const router = require('express').Router();
const articlesController = require("../../controllers/articlesController");

router.route('/')
  .get(articlesController.findAll);
//   .post(articlesController.create);

// router
//   .route('/:id')
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
