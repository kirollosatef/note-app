/**
 * GET /
 * Home page.
 */

exports.homePage = (req, res) => {
  const locals = {
    title: "Notes",
    description: "A place to store your notes.",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page.ejs",
  });
};

/**
 * GET /about
 * About page.
 */

exports.about = (req, res) => {
  const locals = {
    title: "About - Notes",
    description: "Learn more about Notes.",
  };

  res.render("about", locals);
};
