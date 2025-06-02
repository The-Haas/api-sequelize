const exampleRoute = require('./example');
const tasksRoute = require('./tasks');
const salesRoute = require('./sales');

module.exports = (app) => {
  exampleRoute(app);
  tasksRoute(app);
  salesRoute(app);
}