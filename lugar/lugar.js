const axios = require('axios');

const getLugarLatLng = async(dirc) => {

    const encodedUrl = encodeURI(dirc);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '2550648004mshe1ce49331df9c8fp1b2908jsn595a5037fbbf' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dirc}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
};