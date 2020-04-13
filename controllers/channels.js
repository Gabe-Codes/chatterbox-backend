const Channel = require('../models/channel');

module.exports = {
	index,
	create,
	show,
	delete: deleteChannel,
	update,
};

async function index(req, res) {
	const channels = await Channel.find({});
	res.status(200).json(channels);
}

async function create(req, res) {
	const channel = await Channel.create(req.body);
	res.status(201).json(channel);
}

async function show(req, res) {
	const channel = await Channel.findById(req.params.id);
	res.status(200).json(channel);
}

async function update(req, res) {
	const updatedChannel = await Channel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(200).json(updatedChannel);
}

async function deleteChannel(req, res) {
	const deletedChannel = await Channel.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedChannel);
}