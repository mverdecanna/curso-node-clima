
const axios = require('axios');



const getLugarLatLong = async ( lugar ) => {

    const encodeDir = encodeURI(lugar);
    
    console.log(encodeDir);
    
    const instance = axios.create({
        //baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeDir }`,
        headers: {'x-rapidapi-key': 'cd56f88f57msh8529647ca3b6178p15c30cjsndd03d0035a54'}
      });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${ lugar }`)
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lon = data.lon;
    

    return {
        location,
        lat,
        lon
    }
}


module.exports = {
    getLugarLatLong
}