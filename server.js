//Following deployment pattern used in file MERN_shopping

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

// Connect to DB
mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Connected to DB...')
    }).catch((err) => {
        console.log(err);
    });


// use routes


app.use('/api/restcountries', require('./routes/restcountries'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth/', require('./routes/api/auth'));
app.use('/api/memorized', require('./routes/api/memorized'))


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} 

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}...`)});