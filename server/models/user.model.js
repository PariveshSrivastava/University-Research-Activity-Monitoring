const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		userRole: { type: String, default: 'user'},
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User, "user-data")

module.exports = model