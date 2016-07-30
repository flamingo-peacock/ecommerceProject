var mongoose = require( 'mongoose' );

var contactSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	contactType: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	}
});


module.exports = mongoose.model('Contact', contactSchema);