//
// (c) 2018 Nélson Rafael Martins All Rights Reserved
//
// Filename: linhaModel.js
//

var mongoose = require('mongoose');

// Setup schema
var linhaSchema = mongoose.Schema({
	ctrab: {
		type: Number,
		required: true
	},
	descritivo: {
		type: String,
		required: true
	},
	turno: {
		type: String,
		required: true
	},
	qtprod: Number,
	qtrwk: Number,
	objhora: Number,
	realhora: Number,
	tabert: Number,
	tprod: Number,
	tutil: Number,
	estado: {
		type: String,
		required: true
	}
});

// Export Linha model
var Linha = module.exports = mongoose.model('linha', linhaSchema);

module.exports.get = function (callback, limit) {
	Linha.find(callback).limit(limit);
}

