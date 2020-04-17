const Lobby = require('../models/lobby');

module.exports = {
	index,
	create,
	show,
	delete: deleteLobby,
	update,
};

async function index(req, res) {
	const lobbies = await Lobby.find({}).populate('owner');
	res.status(200).json(lobbies);
}

async function create(req, res) {
	const lobby = await Lobby.create(req.body);
	res.status(201).json(lobby);
}

async function show(req, res) {
	const lobby = await Lobby.findById(req.params.id);
	res.status(200).json(lobby);
}

async function update(req, res) {
	const updatedLobby = await Lobby.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(200).json(updatedLobby);
}

async function deleteLobby(req, res) {
	const deletedLobby = await Lobby.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedLobby);
}