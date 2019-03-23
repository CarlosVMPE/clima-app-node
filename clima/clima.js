const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6e08f2d2d2e96caeba75930445123016&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};