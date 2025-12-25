const { Permission } = require('../models');

const seedPermissions = async () => {
  try {
    const permissions = ['read', 'write', 'delete'];

    for (let action of permissions) {
      await Permission.findOrCreate({ where: { action } });
    }

    console.log('Permissions seeded successfully');
  } catch (error) {
    console.error('Error seeding permissions:', error.message);
  }
};

module.exports = seedPermissions;
