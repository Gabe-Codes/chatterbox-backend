const router = require('express').Router();
const usersCtrl = require('../../controllers/users');

router.get('/', usersCtrl.index);
router.get('/:id', usersCtrl.show);

router.post('/', usersCtrl.create)
router.delete('/:id', usersCtrl.delete)
router.put('/:id', usersCtrl.update)

module.exports = router;