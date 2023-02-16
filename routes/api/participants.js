const express = require('express')
const router= express.Router()
const participantsCtrl = require('../../controllers/api/participants')

// GET /api/participants
router.get('/', participantsCtrl.index)


// SHOW /api/participants/user
router.get('/user', participantsCtrl.show)


// POST /api/participants
router.post('/', participantsCtrl.create)


// PATCH /api/participants/:id
router.patch('/:id', participantsCtrl.patch)


// DELETE /api/participants/:id
router.delete('/:id', participantsCtrl.remove)



module.exports = router