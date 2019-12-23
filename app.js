
const serviceLugar = require('./lugar/lugar');
const serviceClima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
     }
    // latitud: {
    //     alias: 'lt',
    //     desc: 'Latitud',
    //     demand: false
    // },
    // longitud: {
    //     alias: 'lg',
    //     desc: 'Longitud',
    //     demand: false
    // }
}).argv;


// serviceLugar.getLugarLatLong( argv.direccion )
//                                 .then( console.log );


// serviceClima.getClima( -34.610001, -58.369999 ) //argv.latitud, argv.longitud )
//                     .then( console.log )
//                     .catch( console.log );

const getInfo = async ( dir ) => {

    try{
        const place = await serviceLugar.getLugarLatLong(dir);
        const temp = await serviceClima.getClima(place.lat, place.lon);
        return `El clima de ${ dir } es de ${ temp }`;

    }catch(error){
        return `No se pudo determinar el clima de ${ dir }`;    
    }
  
}

getInfo( argv.direccion )
                   .then( console.log )
                   .catch( console.log );