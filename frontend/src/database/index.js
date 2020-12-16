const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dorest');
mongoose.Promise = global.Promise;