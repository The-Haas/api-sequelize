const { Sale } = require('../models');

async function insertSale(params) {
  const { description, value } = params;

  if (!description || value === undefined) {
    throw new Error('Campos obrigatórios não informados: description e value');
  }

  const newSale = await Sale.create({
    description,
    value
  });

  return newSale;
}

module.exports = {
  insertSale
};
