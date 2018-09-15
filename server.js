const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

//Define middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Server up static asset(usually use in Heroku)
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"));
// }
//Add routes both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

//connecting to Mongo db
mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/NYTReactSearch");

//App started and listening to port 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})
