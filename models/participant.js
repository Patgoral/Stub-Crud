const mongoose = require('mongoose')
const Schema = mongoose.Schema

const participantSchema = new Schema(
	{
		name: {type: String, required: true},
		location: {
			type: String
		},
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
	}, {
		timestamps: true,
	})

      
      module.exports = mongoose.model('Participant', participantSchema);
