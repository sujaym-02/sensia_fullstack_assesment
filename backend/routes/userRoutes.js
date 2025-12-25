const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const { authorize } = require('../middleware/auth');

router.post('/register', registerUser);
router.get('/protected', authorize('write'), (req, res) => {
  res.json({ message: 'You have write permission!' });
});

module.exports = router;
