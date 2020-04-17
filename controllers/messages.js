const Channel = require('../models/channel');

module.exports = {
	create,
	delete: deleteMessage,
	update,
};

async function create(req, res) {
	const channel = await Channel.findByIdAndUpdate(req.body.id, {
		$push: { messages: req.body },
	});
	res.status(201).json(channel);
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
