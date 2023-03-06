class UserService {
    static async registerUser(username, password) {
        /* DB call here */
        return { username, password };
    }

    static async loginUser(username, password) {
        /* DB - Check if username exists */
        
        /* DB - Match password with real password */

        return true;
    }
}



// export default UserService;
module.exports = UserService;