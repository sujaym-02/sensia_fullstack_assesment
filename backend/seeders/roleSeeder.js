const { Role } = require('../models');

const seedRoles = async () => {
  try {
    const roles = ['Admin', 'User', 'Editor'];

    for (let name of roles) {
      await Role.findOrCreate({ where: { name } });
    }

    console.log('Roles seeded successfully');
  } catch (error) {
    console.error('Error seeding roles:', error.message);
  }
};

module.exports = seedRoles;
