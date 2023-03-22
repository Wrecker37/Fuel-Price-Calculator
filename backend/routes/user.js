const express = require('express');
const { query, body, validationResult} = require('express-validator');

const UserService = require('../services/user-service');

const router = express.Router();

async function postfunc(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        try {
            const user = await UserService.registerUser(username, password);
            return res.status(200).json({ user });
        } catch (err) {
            console.log(`UserService.registerUser() failed - Error${err}`);
            return res.status(500).json({ message: "Cannot load resource"});
        }
    }
/* POST /user/register */
router.post('/register', 
    body('username').exists().notEmpty(),    
    body('password').exists().notEmpty(),    
    postfunc
);

router.post('/login',
    body('username').exists().notEmpty(),    
    body('password').exists().notEmpty(),
    postfunc
)

module.exports = router;