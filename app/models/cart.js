var mongoose = require( 'mongoose' );
var user = require( './user' );
var product = require( './product' );

// Mongoose schema
const Schema = mongoose.Schema;

var cartSchema = new mongoose.Schema({
	products: [{ type: Schema.Types.ObjectId, ref: 'product'}],
	user: { unique: true,
			type: Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('Cart', cartSchema);