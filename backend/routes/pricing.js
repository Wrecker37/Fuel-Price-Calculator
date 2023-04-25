const express = require('express');
const { query, body, validationResult} = require('express-validator');

const PricingService = require('../services/pricing-service');

const router = express.Router();

// POST
router.post('/', 
    body('userId').exists().notEmpty(),
    body('gallons').exists().notEmpty(),
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, gallons } = req.body;

    try {
        const price = await PricingService.calculatePrice(userId, gallons);
        return res.status(200).json({ price });
    } catch (err) {
        console.error(err.message);
        return res.status(401).json({ message: err.message});
    }
});

module.exports = router;