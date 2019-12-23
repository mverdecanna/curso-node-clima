
const axios = require('axios');


const getClima = async ( lat, lon ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=c8cb3eee11ac2f37e396f359b0834878&units=metric`);

    return resp.data.main.temp;
}




module.exports = {
    getClima
}