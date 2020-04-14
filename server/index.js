/** @format */

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// configuracion del servidor
app.set("port", process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
const indexRoutes = require("./router/index.js");
app.use("/", indexRoutes);

app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
});