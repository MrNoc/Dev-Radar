const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

//A constante abaixo, é padrão e será escrita toda vez que nós criarmos um model.
const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs:[String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema);