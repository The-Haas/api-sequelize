const Task = require('./Task');
const Department = require('./Department');
const Sale = require('./Sale');

Task.belongsTo(Department, { foreignKey: 'id_department' });
Department.hasMany(Task, { foreignKey: 'id_department' });

module.exports = {
  Task,
  Department,
  
  Sale
}