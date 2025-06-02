const db = require('../configs');
const { DataTypes } = require('sequelize');

const Sale = db.define('Sale', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: db.literal('CURRENT_TIMESTAMP'),
    field: 'created_at'
  }
}, {
  tableName: 'sales',
  timestamps: false
});

module.exports = Sale;
