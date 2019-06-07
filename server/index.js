const express = require('express');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();


const PORT = 5050;
const {CONNECTION_STRING} = process.env;


const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
})

app.get('/api/inventory', controller.getProducts);
app.post('/api/house', controller.addHouse)



app.listen(PORT, () => console.log(`listening on port ${PORT}`));