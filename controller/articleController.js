const Articles = require("../model/article");

//Defining methods for articleController

module.exports = {
    findAll: function (req, res) {
        Articles
            .find(req.query)
            .sort({date: -1})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    findById: function(req, res) {
        Articles
            .findById(req.params.id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
    remove: function(req, res) {
        Articles
            .findById({
                _id: req.params.id
            })
            .then(data => {
                data.remove();
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(422).json(err);
            })
    },
    create: function(req, res) {
        Articles
            .create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(422).json(err);
            })
    }
          
};