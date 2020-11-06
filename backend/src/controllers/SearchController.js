const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
       
    const { latitude, longitude, techs} = request.query;

    const techsArray = parseStringAsArray(techs);

    //Retorna somente os Devs que trabalham com as tecnologias contidas no array.
    const devs = await Dev.find({
        techs: {
          $in: techsArray,
        },
        //Query que encontra todos os usuários numa distância de 10km baseado na localização do Dev que está fazendo a busca.
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                },
                //Buscar com a distância máxima de 10km.
                $maxDistance: 10000,
            },
        },
    });


    return response.json({ devs });
    }

}