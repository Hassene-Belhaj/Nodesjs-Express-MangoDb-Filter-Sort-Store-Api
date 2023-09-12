const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DATABASE)
.then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
});




module.exports = mongoose

