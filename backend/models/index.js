const User = require('./User');
const Role = require('./Role');
const Permission = require('./Permission');


Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

Role.belongsToMany(Permission, { through: 'RolePermission' });
Permission.belongsToMany(Role, { through: 'RolePermission' });

module.exports = { User, Role, Permission };
