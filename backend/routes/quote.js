const express = require('express');
const { query, body, validationResult} = require('express-validator');

const QuoteService = require('../services/quote-service');

const router = express.Router();

/* GET /quote?userId= */

router.get('/', 
    query('userId').exists().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userId } = req.query;

        try {
            const quotes = await QuoteService.getQuotes(userId);
            return res.status(200).json({ quotes });
        } catch (err) {
            console.log(`QuoteService.getQuotes() failed - Erorr${err}`);
            return res.status(500).json({ message: "Cannot load resource"});
        }
});

/* POST /quote */

router.post('/', 
    body('isInState').exists(),
    body('isPastClient').exists(),
    body('deliveryDate').exists().isString(),
    body('gallonsRequested').exists().isNumeric(),
    body('deliveryAddress').exists().isString(),
    body('price').exists().isNumeric(),
    body('total').exists().isNumeric(),
    body('profitMarginPercent').exists().isNumeric(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userId, ...quote } = req.body;

        try {
            const newQuote = await QuoteService.addQuote(userId, quote);
            return res.status(200).json({ newQuote });
        } catch (err) {
            console.log(`QuoteService.addQuote() failed - Erorr${err}`);
            return res.status(500).json({ message: "Cannot load resource"});
        }
})
module.exports = router;
