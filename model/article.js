const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Defining the key and values of the model/Schema
const articleSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    url: {
        type: String
    },
    date: {
        type: Date
    }
});

const Article = mongoose.model("Article", articleSchema)

module.exports = Article;