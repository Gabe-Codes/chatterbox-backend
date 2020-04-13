const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		postedBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		content: {
			type: String,
		},
		attachment: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const channelSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		messages: [messageSchema],
		lobby: {
			type: Schema.Types.ObjectId,
			ref: 'Lobby',
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Channel', channelSchema);
