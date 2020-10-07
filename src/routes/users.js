const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req,res) => res.send("GET - Users Routes"))
    .post((req,res) => res.send("POST - Users Routes"))

/* router.route('/')
    .get()
    .put()
    .delete()  */   

module.exports = router;        