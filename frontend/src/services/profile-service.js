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
        console.log('Data being sent:', userId, profileDetails);
        const response = await axios.post('http://localhost:8080/profile/postProfile', 
            {
                userId,
                ...profileDetails,
            }
    );
        console.log(response.data.profileSent)
        return response.data.profileSent;
    }
}