const service = require('../services/sales');

async function insertSale(req, res) {
  try {
    const { description, value } = req.body;

    if (!description || value === undefined) {
      return res.status(400).json({
        type: 'error',
        message: 'Campos obrigatórios não informados: description e value'
      });
    }

    const sale = await service.insertSale({ description, value });
    return res.status(201).json(sale);
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao inserir venda',
      error: err.message
    });
  }
}

module.exports = {
  insertSale
};
