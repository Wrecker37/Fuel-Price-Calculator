import axios from "axios";

const BASE_URL = 'http://localhost:8080';

export default class ProfileService {
    static async getUser(username) {
        const user = await axios.get(`${BASE_URL}/user` , {
            params: {
                username,
            },
        });

        return user.data.user;
    }

    static async getProfile(userId) {
        const quotes = await axios.get('http://localhost:8080/profile', {
            params: {
                userId,
            },
        });
        return quotes.data?.profile[0];
    }

    static async setProfile(userId, profileDetails) {
        const response = await axios.post('http://localhost:8080/profile', 
            {
                userId,
                ...profileDetails,
            }
        );
        return response.data.profileSent;
    }
}