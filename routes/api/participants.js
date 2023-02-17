const express = require('express')
const router= express.Router()
const participantsCtrl = require('../../controllers/api/participants')
const participantsSeed = require('../../seed')


// GET /api/participants
router.get('/', participantsCtrl.index)


// SHOW /api/participants/user
router.get('/user', participantsCtrl.show)


// POST /api/participants
router.post('/', participantsCtrl.create)

// // POST SEED /api/participants/seed
// router.post('/seed', participantsSeed.seed)


// PATCH /api/participants/:id
router.patch('/:id', participantsCtrl.patch)


// DELETE /api/participants/:id
router.delete('/:id', participantsCtrl.remove)



module.exports = router