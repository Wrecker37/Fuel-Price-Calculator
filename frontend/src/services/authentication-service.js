import axios from 'axios';

class AuthenticationService {
    static async registerUser(username, password) {
        /* */
        const user = await axios.post('http://localhost:8080/user/register', {
            username,
            password
            
        });
        console.log(user.data.isRegistered)
        return user.data.isRegistered;
    }

    static async loginUser(username, password) {
        // console.log(username, password)
        const user = await axios.post('http://localhost:8080/user/login', {
            username,
            password
            
        });
        console.log(user.data.isLoggedIn)
        return user.data.isLoggedIn;
    }
    
}

export default AuthenticationService;