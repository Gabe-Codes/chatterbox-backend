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
	const channel = await Channel.findOne({ 'messages._id': req.params.id });
	channel.messages.id(req.params.id).message = req.body.content;
	await channel.save();
	res.status(200).json(channel);
}

async function deleteMessage(req, res) {
	const channel = await Channel.findOne({ 'messages._id': req.params.id });
	channel.messages.id(req.params.id).remove();
	await channel.save();
	res.status(200).json(channel);
}
