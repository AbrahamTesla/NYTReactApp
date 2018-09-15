const router = require("express").Router();

const articleRoute = require("./articleRoute/articleRoute");
const nytRoute = require("./nytRoute/nytRoute");

router.use("/",articleRoute);
router.use("/",nytRoute);

module.exports = router;