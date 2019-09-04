import { YELP_KEY } from 'react-native-dotenv';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${YELP_KEY}`
    }
});
