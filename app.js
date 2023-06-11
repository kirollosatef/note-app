require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

// Init app
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", (req, res) => {
  const locals = {
    title: "Home",
    description: "This is the home page",
  }
  res.render("index", locals);
});

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port} \nhttp://localhost:${port}`));
