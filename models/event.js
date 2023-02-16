const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
	{
		participant: {type: mongoose.Schema.Types.ObjectId, 
            ref: 'Participant'
        },
	
	}, {
		timestamps: true,
	})

      
      module.exports = mongoose.model('Event', eventSchema);
