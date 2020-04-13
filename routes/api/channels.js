const router = require('express').Router();
const lobbiesCtrl = require('../../controllers/channels');

router.get('/', lobbiesCtrl.index);
router.get('/:id', lobbiesCtrl.show);

router.post('/', lobbiesCtrl.create);
router.delete('/:id', lobbiesCtrl.delete);
router.put('/:id', lobbiesCtrl.update);

module.exports = router;
