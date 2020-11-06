const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
//const { index } = require('../models/utils/PointSchema');



module.exports = {
async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);

},

async store (request, response){
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username});

    //A condição abaixo faz o seguinte: Se o dev não existir, então o código irá seguir para a criação de um novo Dev.
    if (!dev) {
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };

    //A linha abaixo, colocamos dev para ter o retorno do nosso banco de dados.
    const dev = await Dev.create ({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    })

    };

    return response.json(dev);
}
};