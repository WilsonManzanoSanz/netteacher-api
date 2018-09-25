const router = require('express').Router();
const users = require('./users/routes');
//const typeUsers = require('./type-users/routes');

router.use('/users', users);
//router.use('/type-users', typeUsers);

module.exports = router;