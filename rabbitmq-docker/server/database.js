const mongoose = require('mongoose');

const URI = 'mongodb://mongo/data-packages';

mongoose.connect(URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
    .then(db => console.log('DB is connected to', db.connection.host))
    .catch(err => console.error(err));

module.exports = mongoose;  

