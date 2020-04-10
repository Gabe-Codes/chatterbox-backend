const router = require('express').Router();
const usersCtrl = require('../../controllers/users');

router.get('/', usersCtrl.index);

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.delete('/:id', usersCtrl.delete)
router.put('/:id', usersCtrl.update)

module.exports = router;
