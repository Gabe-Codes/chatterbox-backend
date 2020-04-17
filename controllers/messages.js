const Channel = require('../models/channel');

module.exports = {
	create,
	delete: deleteMessage,
	update,
};

async function create(req, res) {
	const message = await Channel.findById(req.params.id, (err, channel) => {
		channel.messages.push(req.body);
	});
	res.status(201).json(message);
}

async function update(req, res) {
	const updatedMessage = await Channel.findOne(
		{ 'messages._id': req.params.id },
		(err, channel) => {
			const message = channel.messages.id(req.params.id);
			message.message = req.body.content;
		}
	);
	res.status(200).json(updatedMessage);
}

async function deleteMessage(req, res) {
	const deletedMessage = await Channel.findOne(
		{ 'messages._id': req.params.id },
		(err, channel) => {
			const message = channel.messages.id(req.params.id);
			message.remove();
		}
	);
	res.status(200).json(deletedMessage);
}
