import axios from "axios";

export default class ProfileService {
    static async getProfile() {
        const quotes = await axios.get('http://localhost:8080/profile', {
            params: {
                userId: "DummyId",
            },
        });
        return quotes.data.quotes;
    }

    static async postProfile() {
        const profile = await axios.post('http://localhost:8080/profile/postProfile', {
            params: {
                userId: "DummyId",
                profileDetails: {
                    name: "Dummy Name",
                    address1: "Dummy Address1",
                    address2: "Dummy Address2",
                    city: "Dummy City",
                    state: "Dummy State",
                    zipcode: "Dummy Zipcode",

                }
            },
        });
        return profile.data.profileSent;
    }
}