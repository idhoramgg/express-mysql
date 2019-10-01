const express = require('express')
const router = express.Router()

const {
  getAllUser,
  deleteUser,
  updateUser,
  addUser
} = require('../controllers/users');

router.get('/user', getAllUser);
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)
router.post('/user', addUser)
module.exports = router;

/* CRUD ROUTES*/