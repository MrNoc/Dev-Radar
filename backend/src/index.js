const { request, response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const axios = require('axios');
const cors = require('cors');

const app = express();

//Contém a string de conexão com o MongoDB.
mongoose.connect('mongodb+srv://AquinoWP:hP9qM1quRtUoPOHM@cluster0.dfhzx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);