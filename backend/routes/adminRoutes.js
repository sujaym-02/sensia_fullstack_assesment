const express = require('express');
const router = express.Router();
const { authorize } = require('../middleware/auth');
const {
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAllRoles
} = require('../controllers/adminController');


router.get('/users', authorize('write'), getAllUsers);
router.put('/users/role', authorize('write'), updateUserRole);
router.delete('/users/:userId', authorize('write'), deleteUser);
router.get('/roles', authorize('read'), getAllRoles);

module.exports = router;
