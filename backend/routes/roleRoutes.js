const express = require('express');
const router = express.Router();
const {
  assignPermissionsToRole,
  getRolePermissions
} = require('../controllers/roleController');

const { authorize } = require('../middleware/auth');

router.post('/assign', assignPermissionsToRole);

router.get('/:roleName', authorize('read'), getRolePermissions);

module.exports = router;
