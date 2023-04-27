import axios from "axios";

const BASE_URL = 'http://localhost:8080';

class PriceService {
    static async getPrice(userId, gallons) {
        const price = await axios.post(`${BASE_URL}/price`, {
            userId,
            gallons
        });

        if (price.data) {
            return price.data.price;
        }

        return -1;
    }
}

export default PriceService;