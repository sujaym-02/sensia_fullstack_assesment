const { Role, Permission } = require('../models');


const assignPermissionsToRole = async (req, res) => {
  try {
    const { roleName, permissions } = req.body;
   

    const role = await Role.findOne({ where: { name: roleName } });
    if (!role) return res.status(404).json({ message: 'Role not found' });

    const permissionRecords = await Permission.findAll({
      where: { action: permissions }
    });

    await role.setPermissions(permissionRecords);

    res.json({ message: 'Permissions assigned successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};


const getRolePermissions = async (req, res) => {
  try {
    const { roleName } = req.params;

    const role = await Role.findOne({
      where: { name: roleName },
      include: Permission
    });

    if (!role) return res.status(404).json({ message: 'Role not found' });

    res.json({
      role: role.name,
      permissions: role.Permissions.map(p => p.action)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  assignPermissionsToRole,
  getRolePermissions
};
