import axios from "axios";

export default class ProfileService {
    static async getProfile() {
        const quotes = await axios.get('http://localhost:8080/profile/getProfile', {
            params: {
                userId: "DummyId",
            },
        });
        return quotes.data.quotes;
    }

    static async setProfile(userId, profileDetails) {
        console.log('Request data:', {
            userId,
            ...profileDetails,
        });
        const response = await axios.post('http://localhost:8080/profile/postProfile', {
            
                userId,
                ...profileDetails, 
              
            
        });
        return response.data.profile;
    }
}