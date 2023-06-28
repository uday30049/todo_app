const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb+srv://admin:JohnReese12@cluster0.jbnw98v.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true},
  function (err, res) {
    try {
        console.log('Connected to Database');
    } catch (err) {
        throw err;
    }
}
);


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));

