const { User, Role, Permission } = require('../models');
const bcrypt = require('bcryptjs');


const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: { model: Role }
    });
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};


const updateUserRole = async (req, res) => {
  try {
    const { userId, roleName } = req.body;

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const role = await Role.findOne({ where: { name: roleName } });
    if (!role) return res.status(404).json({ message: 'Role not found' });

    user.roleId = role.id;
    await user.save();

    res.json({ message: 'User role updated successfully', user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};


const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll({ include: Permission });
    res.json(roles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllUsers, updateUserRole, deleteUser, getAllRoles };
