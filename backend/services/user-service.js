const bcrypt = require('bcryptjs');
const { storeUser, getUser } = require('../db');
const saltRounds = 10;

class UserService {
    static async registerUser(username, password) {
        try {

            const user = await getUser(username);

            // Check if the username already exists
            if (user) {
                throw new Error('Username is already taken');
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Store the hashed password in the MySQL database
            
            await storeUser(username, hashedPassword);

            // Return the registered user's information
            return { username, password: hashedPassword };
        } catch (error) {
           
            throw error;
        }
    }

    static async loginUser(username, password) {
        try {
           
            
            const user = await getUser(username);

            // Check if the user exists
            if (!user) {
                throw new Error('User not found');
            }

            // Verify the password
            const isMatch = await bcrypt.compare(password, user.hashedPassword);

            // Check if the password matches
            if (!isMatch) {
                throw new Error('Invalid password');
            }

            // Return true if the login is successful
            return true;
        } catch (error) {
          
            throw error;
           
        }
    }
}



// export default UserService;
module.exports = UserService;