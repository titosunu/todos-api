const AuthRouter = require("./auth");
const UserRouter = require("./user");
const ProjectRouter = require("./project");

const routes = (app, prefix) => {
  app.use(prefix, AuthRouter);
  app.use(prefix, UserRouter);
  app.use(prefix, ProjectRouter);
};

module.exports = routes;
