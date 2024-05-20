const axios = require('axios');

const network = 'wemix';
const tokenAddress = '0x770d9d14c4ae2f78dca810958c1d9b7ea4620289';
const apiUrl = `https://api.geckoterminal.com/api/v2/simple/networks/${network}/token_price/${tokenAddress}`;

async function getCrowTokenPrice() {
    try {
        const response = await axios.get(apiUrl);
        const tokenPrices = response.data.data.attributes.token_prices;
        const crowTokenPrice = tokenPrices[tokenAddress.toLowerCase()];
        console.log(`The current price of Crow token is $${crowTokenPrice}`);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error fetching Crow token price:', error.response.data);
            console.error('Status code:', error.response.status);
            console.error('Headers:', error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error fetching Crow token price: No response received');
            console.error('Request data:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
        }
    }
}

getCrowTokenPrice();