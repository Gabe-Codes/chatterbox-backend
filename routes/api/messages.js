const router = require('express').Router();
const messagesCtrl = require('../../controllers/messages');

router.post('/', messagesCtrl.create);
router.delete('/:id', messagesCtrl.delete);
router.put('/:id', messagesCtrl.update);

module.exports = router;
