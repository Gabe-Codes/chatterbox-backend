const router = require('express').Router();
const channelsCtrl = require('../../controllers/channels');

router.get('/', channelsCtrl.index);
router.get('/:id', channelsCtrl.show);

router.post('/', channelsCtrl.create);
router.delete('/:id', channelsCtrl.delete);
router.put('/:id', channelsCtrl.update);

module.exports = router;
