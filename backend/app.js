require('dotenv').config();
const express = require('express');
const app = express();
const roleRoutes = require('./routes/roleRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const logoutRoutes = require('./routes/logoutRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require('cors');



const { connectDB, sequelize } = require('./config/db');
const { User, Role, Permission } = require('./models');


const seedRoles = require('./seeders/roleSeeder');
const seedPermissions = require('./seeders/permissionSeeder');

app.use(express.json());
app.use('/api/roles', roleRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', logoutRoutes);
app.use('/api/admin', adminRoutes);
app.use(cors());



connectDB();


const syncModels = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('All models synced');
  } catch (error) {
    console.error('Error syncing models:', error.message);
  }
};


syncModels().then(() => {
  const seedInitialData = async () => {
    await seedRoles();
    await seedPermissions();
  };
  seedInitialData();
});


app.get('/', (req, res) => {
  res.send('Backend is running');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
