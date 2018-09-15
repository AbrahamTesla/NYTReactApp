const router = require("express").Router();
const axios = require("axios");

//required to read the env file
require("dotenv").config()


//Matches with "/api/nyt"
router
    .route("/")
    .get((req,res) => {
        console.log(req.query);

    axios
        .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.nytApi}`, {params: req.query})
        .then(data => {
            res.json(data.data)
        })
       .catch(err => {
           console.log(err);
           res.json(err);
       });
    });

    module.exports = router;