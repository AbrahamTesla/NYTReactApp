const router = require("express").Router();

const articleController = require("../../../controller/articleController");

//matches with api/articles
router
   .route("/")
   .get(articleController.findAll)
   .post(articleController.create);

//matches with api/articles/:id
router
    .route("/:id")
    .get(articleController.findById)
    .delete(articleController.remove)

module.exports = router;




