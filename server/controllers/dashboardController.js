/**
 * GET /dashboard
 * Dashboard Page
 */

exports.dashboardPage = (req, res) => {
  const locals = {
    title: "Dashboard",
    description: "Dashboard Page",
  };

  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard.ejs",
  });
};
