const bcrypt = require('bcryptjs');
const { User, Role } = require('../models');


const registerUser = async (req, res) => {
  try {
    const { username, email, password, roleName } = req.body;

 
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

   
    const role = await Role.findOne({ where: { name: roleName } });
    if (!role) return res.status(400).json({ message: 'Role not found' });

    
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      roleId: role.id,
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser };
