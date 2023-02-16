const { findById } = require('../../models/event')
const Participant = require('../../models/participant')

// INDEX ALL PARTICIPANTS
async function index(req, res, next) {
	try {
		Participant.find()
			.then((participants) => {
				return participants.map((participant) => participant)
			})
			.then((participants) => {
				res.status(200).json({ participants: participants })
			})
	} catch (error) {
		res.status(400).json(error)
	}
}

// SHOW USER PARTICIPANTS - NOT WORKING
async function show(req, res, next) {
    console.log(req.user._id)

	try {
        const participant = req.body.participant
		await Participant.findById(req.user.id)
			.then((participants) => {
                if (participants.owner.equals(req.user._id)) {
				return participants.map((participant) => participant)
                } else {
                    return 
                }
			})
			.then((participants) => {
				res.status(200).json({ participants: participants })
			})
	} catch (error) {
		res.status(400).json(error)
	}
}


// POST
async function create(req, res, next) {
	console.log(req.body)
	try {
		const participant = req.body.participant
		participant.owner = req.user._id
		await Participant.create(req.body.participant)
        .then((participant) => {
			res.status(201).json({ participant: participant })
		})
	} catch (error) {
		res.status(400).json(error)
	}
}

// PATCH
async function patch(req, res, next) {
	try {
		const participant = req.body.participant
		await Participant.findById(req.params.id)
			.then((participant) => {
				if (participant.owner.equals(req.user._id)) {
					return participant.updateOne(req.body.participant)
				} else {
					return
				}
			})
			.then((participant) => {
				res.status(204).json({ participant: participant })
			})
	} catch (error) {
		res.status(400).json(error)
	}
}

// DELETE
async function remove(req, res, next) {
    console.log(req.user._id)
	try {
        await Participant.findById(req.params.id)
        .then((participant) => {
            if (participant.owner.equals(req.user._id)) {
                return participant.deleteOne()
            } else {
                return
            }
        })
        .then((participant) => {
            res.status(204).json({ participant: participant })
        })
} catch (error) {
    res.status(400).json(error)
}
}

module.exports = {
	index,
    show,
	create,
	patch,
	remove,
}
