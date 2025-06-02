const controller = require('../controllers/sales');

module.exports = (app) => {
  app.post('/sales', controller.insertSale);
};
