//
// (c) 2018 Nélson Rafael Martins All Rights Reserved
//
// Filename: api-routes.js
//
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'API Its Working!',
		message: 'Welcome to LinhasProd',
	});
});

// Import linha controller
var linhaController = require('./linhaController');

// Linha routes
router.route('/linhas')
	.get(linhaController.index)
	.post(linhaController.new);

router.route('/linhas/:linha_id')
	.get(linhaController.view)
	.patch(linhaController.update)
	.put(linhaController.update)
	.delete(linhaController.delete);

// Export API routes
module.exports = router;
