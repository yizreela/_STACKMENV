const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const mongoose = require('mongoose');

const app = express();

//setting
//mongoose.connect('mongodb://localhost/menv-database').then(db => console.log('DB is connected')).catch(err => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(cors());


const posts = require('./routes/api/posts');


app.use('/api/posts', posts);

//handle production
if (process.env.NODE_ENV === 'production') {
    //statictic folder
    app.use(express.static(__dirname + '/public/'));

    //handle spa
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;


app.listen(port, () => console.log('server starter om port', port));