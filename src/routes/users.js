const { Router } = require('express');
const router = Router();

const { getUsers , createUsers, deleteUsers } = require('../controllers/users.controller')
router.route('/')
    .get((req,res) => res.send("GET - Users Routes"))
    .post((req,res) => res.send("POST - Users Routes"))

router.route('/:id')
    .get(getUsers)
    .put(createUsers)
    .delete(deleteUsers)     

module.exports = router;        