const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lobbySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		users: [],
		banned: [],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Lobby', lobbySchema);
