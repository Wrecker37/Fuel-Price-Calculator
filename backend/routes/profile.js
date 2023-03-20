const express = require('express');
const { query, body, validationResult} = require('express-validator');

const ProfileService = require('../services/profile-service');

const router = express.Router();

/* GET /profile */
router.get('/getProfile', 
    query('userId').exists().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userId } = req.query;

        try {
            const profile = await ProfileService.getProfile(userId);
            return res.status(200).json({ profile });
        } catch (err) {
            console.log(`ProfileService.getProfile() failed - Error${err}`);
            return res.status(500).json({ message: "Cannot load resource"});
        }
    }
);

/* POST /profile */
router.post('/postProfile',
    body('userId').exists().notEmpty(),
    body('name').exists().notEmpty(),
    body('address').exists().notEmpty(),
    body('city').exists().notEmpty(),
    body('state').exists().notEmpty(),
    body('zipcode').exists().notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userId, ...profileDetails } = req.body;

        try {
            const profile = await ProfileService.setProfile(userId, profileDetails);
            return res.status(200).json({ profile });
        } catch (err) {
            console.log(`ProfileService.setProfile() failed - Error${err}`);
            return res.status(500).json({ message: "Cannot load resource"});
        }
    }
);

module.exports = router;