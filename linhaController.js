//
// (c) 2018 Nélson Rafael Martins All Rights Reserved
//
// Filename: linhaController.js
//
// Import linha model
Linha = require('./linhaModel');

// Handle index actions
exports.index = function (req, res) {
	Linha.get(function (err, linhas) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		else {
			res.json({
				status: "success",
				message: "Linhas retrieved successfully",
				data: linhas
			});
		}
	});
};

// Handle create linha actions
exports.new = function (req, res) {
	var linha = new Linha();
	linha.ctrab = req.body.ctrab ? req.body.ctrab : linha.ctrab;
	linha.descritivo = req.body.descritivo;
	linha.turno = req.body.turno;
	linha.qtprod = req.body.qtprod;
	linha.qtrwk = req.body.qtrwk;
	linha.objhora = req.body.objhora;
	linha.realhora = req.body.realhora;
	linha.tabert = req.body.tabert;
	linha.tprod = req.body.tprod;
	linha.tutil = req.body.tutil;
	linha.estado = req.body.estado;

	// Save the linha and check for errors
	linha.save(function (err) {
		/*if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		else*/ {
			res.json({
				status: "success",
				message: 'New linha created',
				data: linha
			});
		}
	});
};

// Handle view linha info
exports.view = function (req, res) {
	Linha.findById(req.params.linha_id, function (err, linha) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		else {
			res.json({
			status: "success",
			message: "Linha retrieved successfully",
			data: linha
			});
		}
	});
};

// Handle update linha info
exports.update = function (req, res) {
	Linha.findById(req.params.linha_id, function (err, linha) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		else {
			linha.ctrab = req.body.ctrab ? req.body.ctrab : linha.ctrab;
			linha.descritivo = req.body.descritivo;
			linha.turno = req.body.turno;
			linha.qtprod = req.body.qtprod;
			linha.qtrwk = req.body.qtrwk;
			linha.objhora = req.body.objhora;
			linha.realhora = req.body.realhora;
			linha.tabert = req.body.tabert;
			linha.tprod = req.body.tprod;
			linha.tutil = req.body.tutil;
			linha.estado = req.body.estado;
			// Save the linha anc check for errors
			linha.save(function (err) {
				if (err) {
					res.json({
						status: "error",
						message: err,
					});
				}
				else {
					res.json({
						status: "success",
						message: 'Linha info updated',
						data: linha
					});
				}
		});
		}
	});
};

// Handle delete linha
exports.delete = function (req, res) {
	Linha.remove({
		_id: req.params.linha_id
	}, function (err, linha) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: 'Linha deleted'
		});
	});
};

